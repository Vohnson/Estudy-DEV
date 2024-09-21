import gspread
from oauth2client.service_account import ServiceAccountCredentials
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import time
import os
import json

# Função para salvar progresso em um arquivo
def salvar_progresso(pagina_atual):
    with open('progresso.txt', 'w') as f:
        f.write(str(pagina_atual))

# Função para carregar o progresso de um arquivo
def carregar_progresso():
    try:
        if os.path.exists('progresso.txt'):
            with open('progresso.txt', 'r') as f:
                progresso = f.read().strip()
                if progresso and progresso.isdigit():
                    return int(progresso)
                else:
                    raise ValueError("Arquivo de progresso está vazio ou inválido")
        else:
            return 1  # Começa da página 1 se o arquivo não existir
    except (ValueError, FileNotFoundError) as e:
        print(f"Erro ao carregar o progresso: {e}")
        return 1  # Se houver erro, começa da página 1

# Função para verificar o número da página atual
def verificar_pagina_atual(driver):
    try:
        pagina_atual_element = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, '//button[@class="pagination-button is--active custom-class-active"]/span'))
        )
        return int(pagina_atual_element.text)
    except Exception as e:
        print(f"Erro ao verificar a página atual: {e}")
        return None

# Função para aguardar o desaparecimento de um splash loader
def aguardar_splash_sumir(driver):
    try:
        WebDriverWait(driver, 20).until(
            EC.invisibility_of_element_located((By.ID, "b1-b1-DIV_SplashLoading"))
        )
    except Exception as e:
        print(f"Splash loader não encontrado ou já oculto: {e}")

# Função para tentar clicar no botão "Próxima Página"
def tentar_clicar_proxima_pagina(driver, tentativas=3):
    for tentativa in range(tentativas):
        try:
            next_page_button = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, '//button[@aria-label="go to next page"]'))
            )
            next_page_button.click()
            aguardar_splash_sumir(driver)  # Esperar o splash desaparecer
            time.sleep(3)  # Espera o carregamento da página
            return True
        except Exception as e:
            print(f"Tentativa {tentativa+1}/{tentativas} falhou ao tentar clicar em próxima página: {e}")
            time.sleep(5)  # Espera antes de tentar de novo
    return False

# Função para garantir que estamos na página correta antes de capturar os dados
def confirmar_pagina_correta(driver, pagina_esperada):
    pagina_atual = verificar_pagina_atual(driver)
    if pagina_atual != pagina_esperada:
        print(f"Erro: Estamos na página {pagina_atual}, mas a página esperada era {pagina_esperada}. Tentando navegar novamente.")
        return False
    return True

# Configurações da API do Google Sheets
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name("C:/Users/vohns/PROJ(STUDY-DEV)/MeusProjetos/DB-Pricing/Key_GoogleAPI.json", scope)
client = gspread.authorize(creds)

# Acessa a planilha
sheet = client.open("LADES - ADMINISTRATIVO").worksheet("DB_Pricing")

# Inicializa o ChromeDriver automaticamente
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

# Abrir a página de login
driver.get('https://out-prd.diagnosticosdobrasil.com.br/Portal/Login?ServSol=c14296')

# Fazer login no sistema
try:
    user_field = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, 'Input_UsernameVal'))
    )
    user_field.send_keys("37028758400")
    
    password_field = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, 'Input_PasswordVal'))
    )
    password_field.send_keys("12F46G63H")
    password_field.send_keys(Keys.ENTER)

    WebDriverWait(driver, 10).until(EC.url_changes('https://out-prd.diagnosticosdobrasil.com.br/Portal/Login?ServSol=c14296'))
    print("Login realizado com sucesso!")
    
    driver.get('https://out-prd.diagnosticosdobrasil.com.br/Portal/Financeiro?chave=')
    time.sleep(5)
    
    tabela_precos_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CLASS_NAME, 'fin-sidemenu-item'))
    )
    tabela_precos_button.click()

    time.sleep(5)

    filtrar_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, '//button[contains(@class, "btn-wb-hp-filtrar")]'))
    )
    filtrar_button.click()

    time.sleep(5)

    pagina_atual = carregar_progresso()
    total_paginas = 200

    # Ir para a página salva
    if pagina_atual > 1:
        for pagina in range(1, pagina_atual):
            if not tentar_clicar_proxima_pagina(driver):
                print(f"Erro ao tentar navegar para a página {pagina}.")
                break

    for page in range(pagina_atual, total_paginas + 1):
        print(f"Processando página {page}...")

        if not confirmar_pagina_correta(driver, page):
            print(f"Erro ao chegar na página {page}. Tentando novamente.")
            continuar = tentar_clicar_proxima_pagina(driver)
            if not continuar:
                break  # Se não conseguir navegar para a próxima página, interrompe o loop

        try:
            codigos = driver.find_elements(By.XPATH, '//div[@class="container-wb-lista-historico-preco"]//div[contains(@style, "width: 20%;")]/span[@class="exps-txts-headers"]')
            nomes = driver.find_elements(By.XPATH, '//div[@class="container-wb-lista-historico-preco"]//div[contains(@style, "width: 45%;")]/span')
            valores = driver.find_elements(By.XPATH, '//div[@class="container-wb-lista-historico-preco"]//div[contains(@style, "text-align: center; width: 20%;")]/span[@class="exps-txts-headers"]')

            if len(codigos) == len(nomes) == len(valores):
                for i in range(len(codigos)):
                    codigo = codigos[i].text
                    nome = nomes[i].text
                    valor = valores[i].text
                    sheet.append_row([codigo, nome, valor])
                
                salvar_progresso(page)
                if not tentar_clicar_proxima_pagina(driver):
                    print(f"Erro ao tentar passar para a próxima página após processar a página {page}.")
                    break
            else:
                print("Erro: número inconsistente de colunas!")
                break

        except json.JSONDecodeError:
            print("Erro encontrado: Expecting value: line 1 column 1 (char 0). Aguardando e tentando novamente.")
            time.sleep(10)  # Espera 10 segundos antes de tentar novamente
            continue  # Tenta processar novamente a página atual
        except Exception as e:
            print(f"Erro encontrado: {e}")
            driver.save_screenshot("erro_screenshot.png")
            break

except Exception as e:
    print(f"Erro encontrado: {e}")
    driver.save_screenshot("erro_screenshot.png")

finally:
    driver.quit()

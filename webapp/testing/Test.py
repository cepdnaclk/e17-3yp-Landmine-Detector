#Selenium Testing - 1 for WebApp

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time 

PATH = './chromedriver'
driver = webdriver.Chrome(PATH)

driver.get("https://main.dvdq5iyopxt6p.amplifyapp.com/")
print(driver.title)


username = driver.find_element_by_id("username")
username.send_keys("akila")

time.sleep(5)


driver.quit()



// tests/yahoo-search.spec.ts
import { test, expect } from '@playwright/test';

test('Buscar por "Pacto Soluções" no Yahoo e validar os resultados', async ({ page }) => {
  
  // Acessando Yahoo
  console.log('Acessando página do Yahoo...');
  await page.goto('https://www.yahoo.com');
  console.log('Página do Yahoo carregada com sucesso!');

  // Escrevendo texto e buscando
  console.log('Digitando texto...');
  const searchInput = page.locator('#yschsp');
  await expect(searchInput).toBeVisible();
  await searchInput.fill('Pacto Soluções');
  console.log('Iniciando a pesquisa...');
  await searchInput.press('Enter');

  // Validando resultados
  await expect(page).toHaveURL(/search/);
  const results = page.locator('#web');
  await expect(results).toBeVisible();
  await expect(results).toContainText('Pacto Soluções');
  console.log('Validando resultados da pesquisa');

  // Evidenciando resultado com screenshot
  await page.screenshot({
    path: 'screenshot/yahoo-results.png',
    fullPage: false // captura apenas a viewport
  });

  console.log('Screenshot salvo em screenshot/yahoo-results.png');
  
});

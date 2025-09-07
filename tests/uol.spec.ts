// tests/uol-security.spec.ts
import { test, expect } from '@playwright/test';

test('Verificar última atualização dos termos de Segurança da UOL', async ({ page }) => {
  // Acessando e validando a página da UOL
  console.log('Acessando página da UOL...');
  await page.goto('https://www.uol.com.br/');
  await expect(page.locator('h1 > a > div > img')).toBeVisible();
  console.log('Página da UOL carregada com sucesso!');

  // Localizando botão de Segurança e Privacidade e clicando
  console.log('Clicando no botão "Segurança e privacidade"...');
  await page.locator('a[title="Segurança e privacidade"]').click();

  // Validando página de normas de segurança e privacidade da UOL
  console.log('Validando página de termos de segurança...');
  const titulo = page.locator('.maintitle');
  await expect(titulo).toBeVisible();
  await expect(titulo).toContainText('Normas de Segurança e Privacidade');

  // Localizando data da última atualização do termo de segurança
  console.log('Buscando data de última atualização...');
  const dataText = await page.locator('p:has-text("Atualização:")').innerText();
  const data = dataText.replace('Atualização:', '').trim();
  console.log(`A última atualização aconteceu em: ${data}`);

  // Evidenciando resultado com screenshot apenas do parágrafo da atualização
  const dataElemento = page.locator('p:has-text("Atualização:")');
  await dataElemento.screenshot({
    path: 'screenshot/uol-results.png',
  });

  console.log('Screenshot salvo em screenshot/uol-results.png');
});

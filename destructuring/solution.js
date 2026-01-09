const user = {
  id: 42,
  firstName: 'Laura',
  email: 'laura@example.com',
  settings: {
    theme: 'dark',
    language: 'de'
  }
};

/*
 * TODO:
 * Extrahiere aus user:
 * - name
 * - email
 *
 * Extrahiere aus settings:
 * - theme
 * - language
 *
 * ➡️ Wichtig:
 * Greife nicht mit user.name oder user.settings.theme zu, sondern nutze Destructuring.Extrah
 */

const {
  firstName,
  email,
  settings: { theme, language }
} = user;

console.log(firstName, email, theme, language);

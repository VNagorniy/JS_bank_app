import { getTitle } from '@/config/seo.config';

export class BaseScreen {
  /**
   * Render the child component content
   * @returns {HTMLElement}
   */

  render() {
    throw new Error('Render method must be implemented in the child class');
  }
}

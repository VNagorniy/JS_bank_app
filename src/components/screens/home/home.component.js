import { BaseScreen } from '@/core/component/base-screen.component';
import renderService from '@/core/services/render.service';
import template from './home.template.html';

import styles from './home.module.scss';
import { $R } from '@/core/rquery/rquery.lib';
import { UserItem } from '@/components/ui/user-item/user-item.component';
import { Field } from '@/components/ui/field/field.component';

export class Home extends BaseScreen {
  constructor() {
    super({ title: 'Home' });
  }

  render() {
    const element = renderService.htmlToElement(
      template,
      [
        new Field({
          name: 'dadasd',
          placeholder: 'Enter some',
          variant: 'green',
        }),
        new UserItem({
          avatarPath: 'https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124',
          name: 'Vladimir',
        }),
      ],
      styles
    );

    $R(element).find('h1').css('color', 'green');

    return element;
  }
}

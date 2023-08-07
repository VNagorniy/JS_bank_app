import { nagQuery } from '@/core/nag-query/nag-query';
import { NotificationService } from '@/core/services/notification.service';

export class AuthService {
  #BASE_URL = '/auth';

  constructor() {
    this.notificationService = new NotificationService();
  }

  main(type, body) {
    return nagQuery({
      path: `${this.#BASE_URL}/${type}`,
      body,
      onSuccess: (data) => {
        //login store
        this.notificationService.show('success', 'You have successfully logged in!');
      },
      method: 'POST',
    });
  }
}

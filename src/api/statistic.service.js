import { nagQuery } from '@/core/nag-query/nag-query';

export class StatisticService {
  #BASE_URL = '/statistics';

  main(onSuccess) {
    return nagQuery({
      path: this.#BASE_URL,
      onSuccess,
    });
  }
}

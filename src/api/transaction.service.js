import { nagQuery } from '@/core/nag-query/nag-query';

export class TransactionService {
  #BASE_URL = '/transactions';

  getAll(onSuccess) {
    return nagQuery({
      path:
        this.#BASE_URL +
        `?${new URLSearchParams({
          orderBy: 'desc',
        })}`,
      onSuccess,
    });
  }
}

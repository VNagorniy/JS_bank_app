import { nagQuery } from '@/core/nag-query/nag-query';

export class UserService {
  #BASE_URL = '/users';

  getAll(searchTerm, onSuccess) {
    return nagQuery({
      path: `${this.#BASE_URL}${
        searchTerm
          ? `?${new URLSearchParams({
              searchTerm,
            })}`
          : ''
      }`,
      onSuccess,
    });
  }
}

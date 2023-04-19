import { user } from './index-instance';

export function fetchUser(id: string) {
  return user.get(id);
}

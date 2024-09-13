import type { CurrentUserInformationData } from '@/types';
import { EncryptStorage } from 'encrypt-storage';
const encryptStorage = new EncryptStorage(import.meta.env.VITE_ENCRYPTION_SECRET_LS);

const CURRENT_USER_KEY = 'cu';

// #region User
export const saveCurrentUser = (currentUser: CurrentUserInformationData) => {
  encryptStorage.setItem(CURRENT_USER_KEY, currentUser);
};

export const getCurrentUser = (): CurrentUserInformationData | null => {
  try {
    const data = encryptStorage.getItem<CurrentUserInformationData>(CURRENT_USER_KEY);
    if (data) {
      return data;
    }

    return null;
  } catch {
    return null;
  }
};

export const destroyCurrentUser = () => {
  encryptStorage.removeItem(CURRENT_USER_KEY);
};
// #endregion User

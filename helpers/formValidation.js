import { Alert } from 'react-native';

export const formValidation = (error, password, email, fullName) => {
  let regexChars = /\W|_/g;
  let errorMessage = '';

  switch (true) {
    case !fullName:
      errorMessage = 'Please provide your name';
      break;
    case !email:
      errorMessage = 'Please provide an email';
      break;
    case !email.includes('@') || error.code === 'auth/invalid-email':
      errorMessage = 'Please provide a valid email adress';
      break;
    case error.code === 'auth/email-already-in-use':
      errorMessage = 'An account already created for this email adress';
      break;
    case !password:
      errorMessage = 'Please provide a password';
      break;
    case password.length < 6:
      errorMessage = 'Password must contain at least 6 characters';
      break;
    case !password.match(new RegExp('[A-Z]')):
      errorMessage = 'Password must contain at least 1 uppercase letter.';
      break;
    case !password.match(new RegExp(regexChars)):
      errorMessage = 'Password must contain at least 1 special character.';
      break;
    case !password.match(new RegExp(/[0-9]/)):
      errorMessage = 'Password must contain at least 1 number.';
      break;
    case password.includes(email.split('@')[0]):
      errorMessage = 'Password can not contain your e-mail name.';
      break;
    case error.code === 'auth/user-not-found':
      errorMessage = 'Please create an account to login';
    default:
      break;
  }
  Alert.alert('Oops', errorMessage);
};

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const pr1 = uploadPhoto();
  const pr2 = createUser();

  return Promise.all([pr1, pr2]).then((value) => {
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}

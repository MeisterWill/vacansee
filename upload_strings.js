import { getStorage, ref, uploadString } from "firebase/storage";

const storage = getStorage();
const storageRef = ref(storage, 'some-child');

// Raw string is the default if no format is provided
function upload(){
  alert("Hello!!");
  const message = 'This is my message.';
  uploadString(storageRef, message).then((snapshot) => {
    console.log('Uploaded a raw string!');
  });

  // Base64 formatted string
  const message2 = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
  uploadString(storageRef, message2, 'base64').then((snapshot) => {
    console.log('Uploaded a base64 string!');
  });

  // Base64url formatted string
  const message3 = '5b6p5Y-344GX44G-44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
  uploadString(storageRef, message3, 'base64url').then((snapshot) => {
    console.log('Uploaded a base64url string!');
  });

  // Data URL string
  const message4 = 'data:text/plain;base64,5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
  uploadString(storageRef, message4, 'data_url').then((snapshot) => {
    console.log('Uploaded a data_url string!');
  });
}
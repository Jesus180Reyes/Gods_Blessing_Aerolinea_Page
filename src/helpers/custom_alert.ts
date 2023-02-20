import Swal from 'sweetalert2';


export const customAlert = (title:string,description:string,icon:any) => {
  return  Swal.fire({
    title: title,
    text: description,
    icon: icon
  });
}
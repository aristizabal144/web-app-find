import Swal from 'sweetalert2';

export function errorMessage(error: string) {
    Swal.fire({
        title: error,
        text: 'Please try again',
        icon: 'error',
        confirmButtonColor: 'black',
        confirmButtonText: 'Accept'
    });
}
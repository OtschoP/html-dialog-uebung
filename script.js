const dialogRef = document.getElementById('myDialog');

        function openDialog() {
            dialogRef.showModal();
            dialogRef.classList.add('active');
        }
        function closeDialog() {
            dialogRef.close();
            dialogRef.classList.remove('active');
        }
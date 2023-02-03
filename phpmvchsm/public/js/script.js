    $(function() {

    $('.tombolTambahData') .on('click', function() {
        $('#formModalLabel').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data');

    });

    $('.tampilModalUbah').on('click', function() {

        $('#formModalLabel').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data');
        $('.modal-body form').attr('action','http://localhost/phpmvchsm/public/mahasiswa/ubah');

        const id = $(this).data('id');

        $.ajax( {
            url:'http://localhost/phpmvchsm/public/mahasiswa/getUbah',
            data: { id : id},
            method: 'post',
            dataType: 'json',
            success: function(data) {
                $('#nama').val(data.nama);
                $('#nis').val(data.nis);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
                 $('#id').val(data.id);
               
            }

            });
    });
});
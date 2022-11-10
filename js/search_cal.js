window.onload = function () {
    $(function() {

        $('input[name="chech_in_date"]').daterangepicker({
            autoUpdateInput: false,
            locale: {
                cancelLabel: 'Clear'
            }
        });
      
        $('input[name="chech_in_date"]').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        });
      
        $('input[name="chech_out_date"]').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        });

        $('input[name="chech_in_date"]').on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
        });
      
      });
}
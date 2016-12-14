$(document).ready(function(){
	var
		uvecanaSlikaGalerija = $("#uvecanaSlikaGalerija"),
		ovoJeTaUvecana = $("#ovoJeTaUvecana"),
		galerija_item = $(".galerija_item");

	galerija_item.click(function(){
		uvecanaSlikaGalerija.fadeIn("fast");
		ovoJeTaUvecana.attr('src', $(this).data('slika'));
	});

	$(document).mouseup(function(e){
		if(!ovoJeTaUvecana.is(e.target) && ovoJeTaUvecana.has(e.target).length === 0)
			uvecanaSlikaGalerija.fadeOut("fast");
	});
});
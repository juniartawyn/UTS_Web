var worldData = "";
var countryData = "";
worldInit();
worldCountries();
// countryInit();
function worldInit() {
  var url = "https://disease.sh/v3/covid-19/all";
  $.get(url, function (worldData) {
    // percentageOfWorldDeath =
    //   (worldData.Global.TotalConfirmed / worldData.Global.TotalDeaths) * 100;
    worldData = `
            <td>${worldData.cases}</td>
            <td>${worldData.recovered}</td>
            <td>${worldData.deaths}</td>

    `;
    $("#worldData").html(worldData);
  });
}

function worldCountries() {
  var url = "https://disease.sh/v3/covid-19/countries";
  $.get(url, function (selectedCountry) {
    for (
      var noOfCountries = 0;
      noOfCountries <= selectedCountry.length - 1;
      noOfCountries++
    ) {
      $("#coba").append(
        "<option value = " +
          selectedCountry[noOfCountries].country +
          ">" +
          selectedCountry[noOfCountries].country +
          "</option>"
      );
    }
  });
}

  $.ajax({
    type: "GET",
    url: "https://disease.sh/v3/covid-19/countries",
    success: function (result) {
      for (var list = 0; list <= result.length; list++) {
        $("#coba").change(function () {
          var selected = $("#coba").find("option:selected").text();
          // alert("this is "+selected)
          if (selected == result[list]) {
            alert("sukses")
          }
          alert("your county has been selcted is - "+ selected)
        });
      }
    },
  });


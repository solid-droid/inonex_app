
  var showPopover = function(target,k) {
    document.getElementById(k)
    .show(target);
  };
  
  var temp="inFORM";
function change(k)
{
  temp=k;
}
var hidePopover = function(k) {
  document
    .getElementById(k)
    .hide();
};
var showDialog = function (id) {
  document
    .getElementById(id)
    .show();
};

var hideDialog = function (id) {
  document
    .getElementById(id)
    .hide();
};

function showModal() {
  var modal = document.querySelector('ons-modal');
  modal.show();
  setTimeout(function() {
    modal.hide();
  }, 2000);
};



function check(id) {
   ons
  .notification.prompt({message: 'Enter Declassification code:'})
  .then(function(name) {
    if(name==mac)
    {switch(id)
        {
            case "p1": p1_2018();
            break;
            case "p2": p2_2018();
            break;
            case "p3": p3_2018();
            break;
            case "p4": p4_2018();
            break;
            case "p5": p5_2018();
            break;
            case "p6": p6_2018();
            break;
        }
       }
       else
       ons.notification.alert("Incorrect Declasification Code");
      });
    };

    function p1_2018()
  {
    showDialog('content1');
  };
  function p2_2018()
  {
    showDialog('content2');
  };
  function p3_2018()
  {
    showDialog('content3');
  };
  function p4_2018()
  {
    showDialog('content4');
  };
  function p5_2018()
  {
    showDialog('content5');
  };
  function p6_2018()
  {
    showDialog('content6');
  };

function load(id)
{
  switch(id)
  {
    case "inFORM" : location.href = "https://tangible.media.mit.edu/project/inform/";
    break;
    case "coca" : location.href = "https://www.youtube.com/watch?v=7iUdFw9WfrU&t=5s";
    break;
    case "ksrtc" : location.href = "http://117.239.250.178/ksrtclivedemo/";
    break;
    case "mitra" : location.href = "http://mitra.ksrtc.in/Mysore_commuter_3/";
    break;
    case "med" : location.href = "https://medlineplus.gov/encyclopedia.html";
    break;
    case "symp" : location.href = "https://www.mayoclinic.org/symptom-checker/select-symptom/itt-20009075";
    break;
    case "51" : location.href = "https://www.youtube.com/watch?v=Qf-D1Upn-KU&t=364s";
    break;
    case "ren" : location.href = "https://www.youtube.com/watch?v=le37EsburhU&t=5s";
    break;
    case "proto" : location.href = "https://www.youtube.com/watch?v=3-EY8I_XonY";
    break;
    case "get" : location.href = "http://getnotion.com/";
    break;
    case "smt" : location.href = "https://ideaing.com/ideas/best-smart-light-switches-plugs";
    break;
    case "ver" : location.href = "https://www.youtube.com/watch?v=-_tvJtUHnmU";
    break;
    case "har" : location.href = "https://www.seas.harvard.edu/news/2014/08/self-organizing-thousand-robot-swarm";
    break;
    
    default: ons.notification.alert("Not Found");
  }
};


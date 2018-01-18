let masState = [{
  quest: '',
  time: '',
  status: '',
}
];//array of states for reservation quest room

class Status{
  constructor (quest, time, status) {
    this.quest = quest || 'Content is unavailable';
    this.time = time || 'Content is unavailable';
    this.status = status || 'Content is unavailable';
  }


}
function getQuestName(obj) {
  let quest = obj.id;
}
function getQuestTime(){
  
}
// $("button").click(function() {
//     var id = $(this).attr("data-quest");
//
//     console.log(id);
//   });

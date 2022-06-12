// source intensity control

$(document).ready(function () {

   var emotion_enc_list = [
         {

            text: "教师节到来的那一天，李欢欢居然没有给老师送礼物。",
            wav_fn: "TGEmotionalchild_amazed_240215",
            emo_name: "Amazement",
          },
          {
            text: "你有本事你上呀，别光只说风凉话。",
            wav_fn: "TGEmotionalchild_angry_220090",

            emo_name: "Anger"
         },
         
         {
            text: "小狐狸说好恶心啊。别这样了好吧。",
            wav_fn: "TGEmotionalchild_disgusted_260072",
            emo_name: "Disgust"
         },

         {
            text: "他把车，开得风驰电掣一般，我坐在车后，不免有些害怕。",
            wav_fn: "TGEmotionalchild_fear_210088",
            emo_name: "Fear"
         },

        {
            text: "能和大家在一起我好开心呀！",
            wav_fn: "TGEmotionalchild_happy_250006",
            emo_name: "Happiness"
         },


          {
            text: "你太强大了，我都快要被你活活折腾死了！",
            wav_fn: "TGEmotionalchild_poor_230150",
            emo_name: "Poorness"


         },

         {  
            text: "答应后，安娜心中却是悲哀的长叹。",
            wav_fn: "TGEmotionalchild_sad_230421",

            emo_name: "Sadness"
         }

         ];



   var system_list = [
       "full", "larger", "current", "smaller",
   ];

  
   // var $clone = $t_url.clone();

var tbody = $("#zero_shot_table tbody");
var t_row1 = $("#zero_shot_table_row1");
var t_row2= $("#zero_shot_table_row2");




$.each(emotion_enc_list, function(index, data) {

   var t_row1_clone = t_row1.clone();
   t_row1_clone.children()[0].textContent = data.emo_name;
   t_row1_clone.find('span').text('Text: ' + data.text);

   tbody.append(t_row1_clone)

   // second row
   t_row2_clone = t_row2.clone()

   t_row2_clone.find("audio").each( function(index, )
   {
      new_audio_path = "zero-shot/" + data.emo_name + "/" + system_list[index] + "/"  + data.wav_fn + ".wav";
      this.setAttribute("src", new_audio_path);

   });

   tbody.append(t_row2_clone)

});




t_row1.remove()
t_row2.remove()


});

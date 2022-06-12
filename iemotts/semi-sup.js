// source intensity control

$(document).ready(function () {

   var emotion_enc_list = [
         {

            text: "你明明知道他们家现在的处境，竟然还想趁火打劫。",
            wav_fn: "TGEmotionalchild_amazed_240175",
            emo_name: "Amazement",
          },
          {
            text: "我今日就为你报仇，将这小子打个半死交到你的手中！",
            wav_fn: "TGEmotionalchild_angry_220028",

            emo_name: "Anger"
         },
         
         {
            text: "他这种做法很令人厌烦。",
            wav_fn: "TGEmotionalchild_disgusted_260257",
            emo_name: "Disgust"
         },

         {
            text: "要记住，敌人也和你们一样害怕，可能比你们更害怕。",
            wav_fn: "TGEmotionalchild_fear_210065",
            emo_name: "Fear"
         },

        {
            text: "嘿，我希望能出现一个惊喜吧。",
            wav_fn: "TGEmotionalchild_happy_250030",
            emo_name: "Happiness"
         },


          {
            text: "如果你放不下那个错的人，那你永远也找不到对的人。",
            wav_fn: "TGEmotionalchild_poor_230013",
            emo_name: "Poorness"


         },

         {  
            text: "你不要胡说八道了，我真的经不起任何折腾了。",
            wav_fn: "TGEmotionalchild_sad_230447",

            emo_name: "Sadness"
         }

         ];



   var system_list = [
      "mix2_gvq_spkadv_105_pspk",  "mix2_gvq_spkadv_105_pspk_neu", "mix2_gvq_spkadv_105_pspk_neu2",
   ];

   var spk_list = [
      "LF", "GYY",
   ];
  
   // var $clone = $t_url.clone();

var tbody = $("#semi_sup_table tbody");
var t_row1 = $("#semi_sup_table_row1");
var t_row2= $("#semi_sup_table_row2");




$.each(emotion_enc_list, function(index, data) {

   var t_row1_clone = t_row1.clone();
   t_row1_clone.children()[0].textContent = data.emo_name;
   t_row1_clone.find('span').text('Text: ' + data.text);

   tbody.append(t_row1_clone)

   // second row
   t_row2_clone = t_row2.clone()

   t_row2_clone.find("audio").each( function(index, )
   {
      new_audio_path = "semi_sup/" + data.emo_name + "/" + system_list[index] + "/"  + data.wav_fn + '_TGLF'+ ".wav";
      this.setAttribute("src", new_audio_path);

   });

   tbody.append(t_row2_clone)

});




t_row1.remove()
t_row2.remove()


});

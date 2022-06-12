// source intensity control

$(document).ready(function () {

   var emotion_enc_list = [
         {

            text: "一些销售假冒商品竟然欺骗顾客。",
            wav_fn: "TGEmotionalchild_amazed_240044",
            emo_name: "Amazement",
          },
          {
            text: "我今日就为你报仇，将这小子打个半死交到你的手中！",
            wav_fn: "TGEmotionalchild_angry_220028",

            emo_name: "Anger"
         },
         
         {
            text: "狐狸爸爸平生最讨厌那些无所事事，游手好闲之人了。",
            wav_fn: "TGEmotionalchild_disgusted_260024",

            emo_name: "Disgust"
         },

         {
            text: "一旦做了亏心事，自然每天心惊肉跳，害怕被人发现。",
            wav_fn: "TGEmotionalchild_fear_210007",

            emo_name: "Fear"
         },

        {
            text: "能和大家在一起我好开心呀！",
            wav_fn: "TGEmotionalchild_happy_250006",
            emo_name: "Happiness"
         },


          {
            text: "如果你放不下那个错的人，那你永远也找不到对的人。",
            wav_fn: "TGEmotionalchild_poor_230013",
            emo_name: "Poorness"


         },

         {  
            text: "小白兔听闻这个消息，内心无比的哀痛。",
            wav_fn: "TGEmotionalchild_sad_230368",

            emo_name: "Sadness"
         }

         ];



   var system_list = [
      "mix2_gvq_spkadv_105",  "mix21_emoid", "mix2_gvq_spkadv_105_pspk_nostr",
   ];

   var spk_list = [
      "LF", "GYY",
   ];
  
   // var $clone = $t_url.clone();

var tbody = $("#emotion_enc_table tbody");
var t_row1 = $("#emotion_enc_table_row1");
var t_row2= $("#emotion_enc_table_row2");




$.each(emotion_enc_list, function(index, data) {

   var t_row1_clone = t_row1.clone();
   t_row1_clone.children()[0].textContent = data.emo_name;
   t_row1_clone.find('span').text('Text: ' + data.text);

   tbody.append(t_row1_clone)

   // second row
   t_row2_clone = t_row2.clone()

   t_row2_clone.find("audio").each( function(index, )
   {
      new_audio_path = "emotion_enc/" + data.emo_name + "/" + system_list[index] + "/"  + data.wav_fn + '_TGLF'+ ".wav";
      this.setAttribute("src", new_audio_path);

   });

   tbody.append(t_row2_clone)

});




t_row1.remove()
t_row2.remove()


});

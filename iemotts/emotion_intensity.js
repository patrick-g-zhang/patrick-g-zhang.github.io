// source intensity control

$(document).ready(function () {

   var source_emotion_intensity_list = [
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
            text: "我有点儿害怕去和他比赛，因为他现在，不是吴下阿蒙了。",
            wav_fn: "TGEmotionalchild_fear_210030",
            emo_name: "Fear"
         },

         {
            text: "看到他这个样子，一种厌恶的感觉油然而生。",
            wav_fn: "TGEmotionalchild_disgusted_260030",
            emo_name: "Disgust"
         },

         {
            text: "他在美国可是受很多女孩子喜欢的哟！",
            wav_fn: "TGEmotionalchild_happy_250072",
            emo_name: "Happiness"
         },

          {
            text: "我真的很痛苦，真想早点了结自己。",
            wav_fn: "TGEmotionalchild_poor_230105",
            emo_name: "Poorness"
         },

         {  
            text: "你太强大了，我都快要被你活活折腾死了.",
            wav_fn: "TGEmotionalchild_sad_230150",
            emo_name: "Sadness"
         }

			];

   var target_emotion_intensity_list = [
         {
            text: "教师节到来的那一天，李欢欢居然没有给老师送礼物。",
            wav_fn: "TGEmotionalchild_amazed_240215",
            emo_name: "Amazement",
          },
          {
            text: "心情不灿烂，不阳光我理解，但是我也生气！",
            wav_fn: "TGEmotionalchild_angry_220209",
            emo_name: "Anger"
         },
         
         {
            text: "今天该我去做演讲了。",
            wav_fn: "TGEmotionalchild_fear_210234",
            emo_name: "Fear"
         },

         {
            text: "永和豆浆，你不光垃圾还很恶心。",
            wav_fn: "TGEmotionalchild_disgusted_260314",
            emo_name: "Disgust"
         },

         {
            text: "在我看来能直接拒绝别人的人可真棒！",
            wav_fn: "TGEmotionalchild_happy_250129",
            emo_name: "Happiness"
         },

          {
            text: "放过我吧，我不过是一个弱女子。",
            wav_fn: "TGEmotionalchild_poor_230195",
            emo_name: "Poorness"
         },

         {  
            text: "小白兔听闻这个消息，内心无比的哀痛。",
            wav_fn: "TGEmotionalchild_sad_230368",
            emo_name: "Sadness"
         }

         ];

   var intensity_list = [
      "low", "mid", "high"
   ];

   var_system_list = [
      {
         sys_name: "iEMOTTS",
         file_name: "proposed",
      },
      {
         sys_name: "iEMOTTS-S",
         file_name: "sm"
      },
   ];


  
   // var $clone = $t_url.clone();

var tbody = $("#source_emotion_intensity tbody");
var t_text = $("#source_emotion_intensity_text");
var t_url = $("#source_emotion_intensity_url");



$.each(source_emotion_intensity_list, function(index, data) {

   var text_clone = t_text.clone();
   text_clone.find('span').text('Text: ' + data.text);
   text_clone.children("td.tg-dvpl").text(data.emo_name);
   tbody.append(text_clone)

   // # url list
   $.each(var_system_list, function(sindex, sdata) {
      var t_url_clone = t_url.clone();
      t_url_clone.children("td.tg-dvpl").text(sdata.sys_name);

      t_url_clone.find("audio").each( function(index, )
      {
         new_audio_path = "emotion_intensity_source/" + data.emo_name + "/" + intensity_list[index] + "/" + sdata.file_name + "/" + data.wav_fn + ".wav";
         this.setAttribute("src", new_audio_path);

      });

      tbody.append(t_url_clone)
   });
});

tbody = $("#target_emotion_intensity tbody");
$.each(target_emotion_intensity_list, function(index, data) {

   var text_clone = t_text.clone();
   text_clone.find('span').text('Text: ' + data.text);
   text_clone.children("td.tg-dvpl").text(data.emo_name);
   tbody.append(text_clone)

   // # url list
   $.each(var_system_list, function(sindex, sdata) {
      var t_url_clone = t_url.clone();
      t_url_clone.children("td.tg-dvpl").text(sdata.sys_name);

      t_url_clone.find("audio").each( function(index, )
      {
         new_audio_path = "emotion_intensity_target/" + data.emo_name + "/" + intensity_list[index] + "/" + sdata.file_name + "/" + data.wav_fn + ".wav";
         this.setAttribute("src", new_audio_path);

      });

      tbody.append(t_url_clone)
   });
});


t_text.remove()
t_url.remove()

});

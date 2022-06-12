// source intensity control

$(document).ready(function () {

   var disen_list = [
         {

				text_1: "一些销售假冒商品竟然欺骗顾客。",
				wav_fn_1: "TGEmotionalchild_amazed_240044",

            text_2: "这么简单你都不会。",
            wav_fn_2: "TGEmotionalchild_amazed_240471",

            emo_name: "Amazement",
			 },
			 {
            text_1: "我今日就为你报仇，将这小子打个半死交到你的手中！",
            wav_fn_1: "TGEmotionalchild_angry_220028",

            text_2: "莫名被拘禁，真的让人羞愧恼怒到了极点。",
            wav_fn_2: "TGEmotionalchild_angry_220183",

				emo_name: "Anger"
			},
         
         {
            text_1: "狐狸爸爸平生最讨厌那些无所事事，游手好闲之人了。",
            wav_fn_1: "TGEmotionalchild_disgusted_260024",

            text_2: "紫心公主那种搔首弄姿的女人，我见了就讨厌。",
            wav_fn_2: "TGEmotionalchild_disgusted_260400",

            emo_name: "Disgust"
         },

         {
            text_1: "一旦做了亏心事，自然每天心惊肉跳，害怕被人发现。",
            wav_fn_1: "TGEmotionalchild_fear_210007",

            text_2: "他妻子去世后，他感到六神无主，十分消极。",
            wav_fn_2: "TGEmotionalchild_fear_210421",

            emo_name: "Fear"
         },

        {
            text_1: "能和大家在一起我好开心呀！",
            wav_fn_1: "TGEmotionalchild_happy_250006",

            text_2: "这又是一个惊喜啊，让人激动。",
            wav_fn_2: "TGEmotionalchild_happy_250382",

            emo_name: "Happiness"
         },


          {
            text_1: "如果你放不下那个错的人，那你永远也找不到对的人。",
            wav_fn_1: "TGEmotionalchild_poor_230013",

            text_2: "之前为我出力办事，现在怎么能反咬一口啊。",
            wav_fn_2: "TGEmotionalchild_poor_230259",

            emo_name: "Poorness"
         },

         {  
            text_1: "小白兔听闻这个消息，内心无比的哀痛。",
            wav_fn_1: "TGEmotionalchild_sad_230368",

            text_2: "我有你这样的儿子，也够悲哀的！",
            wav_fn_2: "TGEmotionalchild_sad_230305",

            emo_name: "Sadness"
         }

			];



   var system_list = [
      "mix2_gvq_spkadv_105_pspk", "mix2_gvq_spkadv_105_pspk_nopros", "mix2_gvq_spkadv_105","mix2_gvq_spkadv_105_nopros"
   ];

   var spk_list = [
      "LF", "GYY",
   ];
  
   // var $clone = $t_url.clone();

var tbody = $("#disentanglement_table tbody");
var t_row1 = $("#disentanglement_table_row1");
var t_row2= $("#disentanglement_table_row2");
// var t_row3 = $("#disentanglement_table_row3");
// var t_row4 = $("#disentanglement_table_row4");




$.each(disen_list, function(index, data) {

   var t_row1_clone = t_row1.clone();
   t_row1_clone.children()[0].textContent = data.emo_name;
   // t_row1_clone.children()[1].textContent = spk_list[0];
   t_row1_clone.find('span').text('Text: ' + data.text_1);

   tbody.append(t_row1_clone)

   // second row
   t_row2_clone = t_row2.clone()

   t_row2_clone.find("audio").each( function(index, )
   {
      new_audio_path = "disentanglement/" + data.emo_name + "/" + system_list[index] + "/"  + data.wav_fn_1 + '_TGLF'+ ".wav";
      this.setAttribute("src", new_audio_path);

   });

   tbody.append(t_row2_clone)

   // t_row3_clone = t_row3.clone()
   // t_row3_clone.find('span').text('Text: ' + data.text_2);
   // t_row3_clone.children()[0].textContent = spk_list[1];


   // t_row4_clone = t_row4.clone()

   // t_row4_clone.find("audio").each( function(index, )
   // {
   //    new_audio_path = "disentanglement/" + data.emo_name + "/" + system_list[index] + "/"  + data.wav_fn_2 + '_TGGYY'+ ".wav";
   //    this.setAttribute("src", new_audio_path);

   // });

   // tbody.append(t_row3_clone)
   // tbody.append(t_row4_clone)


});




t_row1.remove()
t_row2.remove()
// t_row3.remove()
// t_row4.remove()


});

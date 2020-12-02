import glob
import re
import ipdb
import os
import shutil

wav_dir = "/Users/patrickzhang/Documents/generated_200000_/wavs"
target_dir = "./audio_samples/vq_8_g1"
os.makedirs(target_dir, exist_ok=True)

wav_list = ['LJ001-0027', 'LJ001-0030', 'LJ001-0036', 'LJ001-0089',
            'LJ001-0105', 'LJ002-0024', 'LJ002-0027', 'LJ002-0041']

all_wavs = glob.glob(f"{wav_dir}/*.wav")
for wav_path in all_wavs:
    res = re.findall("\[(.*?)\]", wav_path)
    assert len(res) == 2
    if res[0] == 'P':
        new_file_name = re.split("\_", res[1])[1]
        if new_file_name in wav_list:
            # ipdb.set_trace()
            new_wav_path = target_dir + '/' + new_file_name + '.wav'
            shutil.copy(wav_path, new_wav_path)




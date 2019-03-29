# NODEJS Thai Citizen ID Card reader.
This code is created from my attempt to translate thai-id-card reader code from https://gist.github.com/bouroo/8b34daf5b7deed57ea54819ff7aeef6e into NodeJS.

Feel free to extend and improve this repo!


โค้ดตรงนี้เกิดจากความพยายามแปลงโค้ดภาษา python ดึงข้อมูลบัตรประชาชนไทย จาก  https://gist.github.com/bouroo/8b34daf5b7deed57ea54819ff7aeef6e ให้เป็น NodeJS



##Issues
* Card reader devices are communicated through 'smartcard' module (https://www.npmjs.com/package/smartcard), and thus commands are sent through issueCommand method of smartcard.Device.Card
* ID Card information extraction methods aren't OOP class method. They are a set of (kinda) pure functions which take "card" object of smartcard.Device.Card as an argument and return a Promise. I think this can be improved.
* HUGE dependency problem. This is written in NodeJS V 5.12.0, which doesn't support ES6 feature of this project's dependency. I had to modify some files in node_modules/smartcard in order to make it work.
* Only a few information extraction methods are implemented (I'm too lazy to copy & paste all command)
* The first card reader in array of devices is selected as a default reader. Is there any way to improve this?


* ตอนนี้ติดต่ออุปกรณ์อ่านการ์ดผ่านทางโมดูล 'smartcard' (https://www.npmjs.com/package/smartcard) ทำให้ส่วนการสื่อสารยังเรียกใช้ method ของทาง smartcard module เป็นหลัก
* method ดึงข้อมูลบัตรไม่ได้เป็น OOP method แต่เป็น pure function ที่รับตัว object card ของ 'smartcard' module เป็น argument นั่นคือ แทนที่จะได้เป็น card.getCID() ก็เป็น getCID(card)  โดยส่วนตัวรู้สึกว่ามันยังไม่สวย
* มีปัญหา dependency เนื่องจากเขียนด้วย NodeJS V 5.12.0 ซึ่งยังไม่รองรับ ES6 ทำให้ตอนแรกใช้ module บางตัวไม่ได้
* method ดึงข้อมูลบัตรยัง implement ไม่หมด (ขี้เกียจ)
* ตัว card reader นั้นต่อได้หลายตัว แต่ flow ตอนนี้ทำให้ใช้ตัวที่โผล่อันแรกใน devices ของ smartcard เป็นตัวที่โดนใช้



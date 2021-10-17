const zipSync = new Promise((resolve, reject) => {
  // 外部のjsonファイルを読み込む
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'zips.json', true);

  xhr.onload = () => {
    if (xhr.readyState === 4) {
			if(xhr.status === 200){
				resolve(xhr.response);
			}else{
				reject(new Error(xhr.statusText))
			}
    }
  };
  xhr.send(null);
}).then((value)=>{
	console.log(value);
}).catch((reason)=>{
	console.log(reason);
})

// interface AddressFormat{
//   zip:string;
//   prefecture:string;
//   city:string;
// }

// class TowerAddress implements AddressFormat{
//   public zip;
//   public prefecture;
//   public city;
// }

// class Address implements AddressFormat {
//   // privateはクラス内からアクセス可能
//   private addresses: any;
//   public zip;
//   public prefecture;
//   public city;

//   // クラスを初期化する処理
//   public constructor(private _zip: string) {
//     this.addresses = {
//       '079-1100': {
//         prefecture: '北海道',
//         city: '赤平氏',
//       },
//       '038-0000': {
//         prefecture: '青森県',
//         city: '青森市',
//       },
//     };
//   }

//   // 番号を知るためのメソッド
//   public getZip(): string {
//     return this.zip;
//   }
// 	// ↓ゲッターで書き換える
// 	get zip():string {
// 		return this._zip;
// 	}

// 	set zip(value:string){
// 		this._zip = value;
// 	}

//   // 番号から住所を知るためのメソッド
// 	public getAddress():string{
// 		let here = this.addresses[this.zip];
// 		return `${here.prefecture} ${here.city}`;
// 	}
// }

// let myAddress1 = new Address('038-0000');
// let myAddress2 = new Address('079-1100');
// console.log(myAddress1.getAddress());
// console.log(myAddress2.getAddress());

// // console.log(myAddress1.zipStr);
// console.log(myAddress1.zip);
// myAddress1.zip='111-1111';
// class Address {
//   // publicはどこからでもアクセス可能
//   // public zip:string;
//   private zip: string;
//   // privateはクラス内からアクセス可能
//   private addresses: any;

//   // クラスを初期化する処理
//   public constructor(zip: string) {
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
//     this.zip = zip;
//   }
//   // 番号を知るためのメソッド
//   public getZip(): string {
//     return this.zip;
//   }
//   // 番号から住所を知るためのメソッド
// 	public getAddress():string{
// 		let here = this.addresses[this.zip];
// 		return `${here.prefecture} ${here.city}`;
// 	}
// }

// let myAddress = new Address('079-1100');
// // console.log(myAddress.getZip());
// console.log(myAddress.getAddress());

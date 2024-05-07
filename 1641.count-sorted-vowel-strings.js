// @leet start
/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
  let dp = new Array(5).fill(1);
  n -= 1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 5; j++) {
      dp[j] = dp.slice(j).reduce((a, b) => a + b);
    }
  }
  return dp.reduce((a, b) => a + b);
};

// 1 + 1 + 1 + 1 + 1
// 5 + 4 + 3 + 2 + 1
// 15 + 10 + 6 + 3 + 1
// 35 + 20 + 10 + 4 + 1
// 70 + 35 + 15 + 5 + 1

// @leet end
//
// a    e    i    o    u  
// aa   ae   ai   ao   au 
//      ee   ei   eo   eu 
//           ii   io   iu 
//                oo   ou 
//                     uu 
//                               
// aa   ae   ai   ao   au   ee   ei   eo   eu   ii   io   iu   oo   ou   uu   
// aaa  aae  aai  aao  aau  aee  aei  aeo  aeu  aii  aio  aiu  aoo  aou  auu  
//                          eee  eei  eeo  eeu  eii  eio  eiu  eoo  eou  euu  
//                                              iii  iio  iiu  ioo  iou  iuu  
//                                                             ooo  oou  ouu  
//                                                                       uuu  
//
//
// aaa  aae  aai  aao  aau  aee  aei  aeo  aeu  aii  aio  aiu  aoo  aou  auu  eee  eei  eeo  eeu  eii  eio  eiu  eoo  eou  euu  iii  iio  iiu  ioo  iou  iuu  ooo  oou  ouu  uuu  
// aaaa aaae aaai aaao aaau aaee aaei aaeo aaeu aaii aaio aaiu aaoo aaou aauu aeee aeei aeeo aeeu aeii aeio aeiu aeoo aeou aeuu aiii aiio aiiu aioo aiou aiuu aooo aoou aouu auuu 
//                                                                            eeee eeei eeeo eeeu eeii eeio eeiu eeoo eeou eeuu eiii eiio eiiu eioo eiou eiuu eooo eoou eouu euuu 
//                                                                                                                              iiii iiio iiiu iioo iiou iiuu iooo ioou iouu iuuu 
//                                                                                                                                                            oooo ooou oouu ouuu 
//                                                                                                                                                                           uuuu  
//


const e=document.querySelector(".bitcoin-price"),c=document.querySelector(".bitcoin-change"),o=document.querySelector(".bitcoin-div"),t=document.querySelector(".cardano-price"),r=document.querySelector(".cardano-change"),u=document.querySelector(".cardano-div"),n=document.querySelector(".doge-price"),d=document.querySelector(".doge-change"),l=document.querySelector(".doge-div"),m=document.querySelector(".polkadot-price"),i=document.querySelector(".polkadot-change"),a=document.querySelector(".polkadot-div"),y=document.querySelector(".shiba-price"),q=document.querySelector(".shiba-change"),S=document.querySelector(".shiba-div"),h=document.querySelector(".polygon-price"),s=document.querySelector(".polygon-change"),v=document.querySelector(".polygon-div"),p=document.querySelector(".avax-price"),g=document.querySelector(".avax-change"),k=document.querySelector(".avax-div"),x=document.querySelector(".trx-price"),b=document.querySelector(".trx-change"),w=document.querySelector(".trx-div"),z=document.querySelector(".leo-price"),f=document.querySelector(".leo-change"),C=document.querySelector(".leo-div"),L=document.querySelector(".uni-price"),_=document.querySelector(".uni-change"),$=document.querySelector(".uni-div"),F=document.querySelector(".cosmos-price"),j=document.querySelector(".cosmos-change"),D=document.querySelector(".cosmos-div"),I=document.querySelector(".eos-price"),A=document.querySelector(".eos-change"),B=document.querySelector(".eos-div"),E=document.querySelector(".ethC-price"),G=document.querySelector(".ethC-change"),H=document.querySelector(".ethC-div"),J=document.querySelector(".litecoin-price"),K=document.querySelector(".litecoin-change"),M=document.querySelector(".litecoin-div"),N=document.querySelector(".okb-price"),O=document.querySelector(".okb-change"),P=document.querySelector(".okb-div"),Q=document.querySelector(".chainlink-price"),R=document.querySelector(".chainlink-change"),T=document.querySelector(".chainlink-div"),U=document.querySelector(".xlm-price"),V=document.querySelector(".xlm-change"),W=document.querySelector(".xlm-div"),X=document.querySelector(".ftx-price"),Y=document.querySelector(".ftx-change"),Z=document.querySelector(".ftx-div"),ee=document.querySelector(".near-price"),ce=document.querySelector(".near-change"),oe=document.querySelector(".near-div"),te=document.querySelector(".cronos-price"),re=document.querySelector(".cronos-change"),ue=document.querySelector(".cronos-div"),ne=document.querySelector(".algo-price"),de=document.querySelector(".algo-change"),le=document.querySelector(".algo-div"),me=document.querySelector(".monero-price"),ie=document.querySelector(".monero-change"),ae=document.querySelector(".monero-div"),ye=document.querySelector(".bcash-price"),qe=document.querySelector(".bcash-change"),Se=document.querySelector(".bcash-div"),he=document.querySelector(".vet-price"),se=document.querySelector(".vet-change"),ve=document.querySelector(".vet-div"),pe=document.querySelector(".quant-price"),ge=document.querySelector(".quant-change"),ke=document.querySelector(".quant-div"),xe=document.querySelector(".tezos-price"),be=document.querySelector(".tezos-change"),we=document.querySelector(".tezos-div"),ze=document.querySelector(".axie-price"),fe=document.querySelector(".axie-change"),Ce=document.querySelector(".axie-div"),Le=document.querySelector(".theta-price"),_e=document.querySelector(".theta-change"),$e=document.querySelector(".theta-div"),Fe=document.querySelector(".elrond-price"),je=document.querySelector(".elrond-change"),De=document.querySelector(".elrond-div"),Ie=document.querySelector(".aave-price"),Ae=document.querySelector(".aave-change"),Be=document.querySelector(".aave-div"),Ee=document.querySelector(".kucoin-price"),Ge=document.querySelector(".kucoin-change"),He=document.querySelector(".kucoin-div"),Je=document.querySelector(".xrp-price"),Ke=document.querySelector(".xrp-change"),Me=document.querySelector(".xrp-div"),Ne=document.querySelector(".iota-price"),Oe=document.querySelector(".iota-change"),Pe=document.querySelector(".iota-div"),Qe=document.querySelector(".eth-price"),Re=document.querySelector(".eth-change"),Te=document.querySelector(".eth-div"),Ue=document.querySelector(".zcash-price"),Ve=document.querySelector(".zcash-change"),We=document.querySelector(".zcash-div"),Xe=document.querySelector(".huobi-price"),Ye=document.querySelector(".huobi-change"),Ze=document.querySelector(".huobi-div"),ec=document.querySelector(".sol-price"),cc=document.querySelector(".sol-change"),oc=document.querySelector(".sol-div"),tc=document.querySelector(".evmos-price"),rc=document.querySelector(".evmos-change"),uc=document.querySelector(".evmos-div"),nc=document.querySelector(".celsius-price"),dc=document.querySelector(".celsius-change"),lc=document.querySelector(".celsius-div"),mc=document.querySelector(".cake-price"),ic=document.querySelector(".cake-change"),ac=document.querySelector(".cake-div"),yc=document.querySelector(".gate-price"),qc=document.querySelector(".gate-change"),Sc=document.querySelector(".gate-div"),hc=document.querySelector(".neo-price"),sc=document.querySelector(".neo-change"),vc=document.querySelector(".neo-div"),pc=document.querySelector(".maker-price"),gc=document.querySelector(".maker-change"),kc=document.querySelector(".maker-div"),xc=document.querySelector(".helium-price"),bc=document.querySelector(".helium-change"),wc=document.querySelector(".helium-div"),zc=document.querySelector(".fantom-price"),fc=document.querySelector(".fantom-change"),Cc=document.querySelector(".fantom-div"),Lc=document.querySelector(".synt-price"),_c=document.querySelector(".synt-change"),$c=document.querySelector(".synt-div"),Fc=document.querySelector(".bnb-price"),jc=document.querySelector(".bnb-change"),Dc=document.querySelector(".bnb-div"),Ic=document.querySelector(".osmosis-price"),Ac=document.querySelector(".osmosis-change"),Bc=document.querySelector(".osmosis-div"),Ec=document.querySelector(".nexo-price"),Gc=document.querySelector(".nexo-change"),Hc=document.querySelector(".nexo-div"),Jc=document.querySelector(".ceth-price"),Kc=document.querySelector(".ceth-change"),Mc=document.querySelector(".ceth-div"),Nc=document.querySelector(".arw-price"),Oc=document.querySelector(".arw-change"),Pc=document.querySelector(".arw-div"),Qc=document.querySelector(".zil-price"),Rc=document.querySelector(".zil-change"),Tc=document.querySelector(".zil-div"),Uc=document.querySelector(".rune-price"),Vc=document.querySelector(".rune-change"),Wc=document.querySelector(".rune-div"),Xc=document.querySelector(".dash-price"),Yc=document.querySelector(".dash-change"),Zc=document.querySelector(".dash-div"),eo=document.querySelector(".rocket-price"),co=document.querySelector(".rocket-change"),oo=document.querySelector(".rocket-div"),to=document.querySelector(".stacks-price"),ro=document.querySelector(".stacks-change"),uo=document.querySelector(".stacks-div"),no=document.querySelector(".waves-price"),lo=document.querySelector(".waves-change"),mo=document.querySelector(".waves-div"),io=document.querySelector(".kava-price"),ao=document.querySelector(".kava-change"),yo=document.querySelector(".kava-div"),qo=document.querySelector(".xdc-price"),So=document.querySelector(".xdc-change"),ho=document.querySelector(".xdc-div"),so=document.querySelector(".comp-price"),vo=document.querySelector(".comp-change"),po=document.querySelector(".comp-div"),go=async(e,c,o,t,r)=>{const u=await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${e}&vs_currencies=usd&include_24hr_change=true`);((e,c,o,t,r,u)=>{const n=e[o].usd.toFixed(u),d=e[o].usd_24h_change.toFixed(2);r.textContent="",t.textContent="",r.textContent=`$${n}`,t.textContent=`${d}%`,((e,c)=>{c>-2.5&&c<2.5&&e.classList.add("neutral"),c>0&&c<7.5&&e.classList.add("u1"),c>7.5&&e.classList.add("u2"),c<-2.5&&e.classList.add("d1"),c<-7.5&&e.classList.add("d2")})(c,d)})(await u.json(),c,e,o,t,r)};setInterval((()=>{go("bitcoin",o,c,e,0),go("cardano",u,r,t,2),go("dogecoin",l,d,n,4),go("polkadot",a,i,m,2),go("shiba-inu",S,q,y,7),go("matic-network",v,s,h,2),go("avalanche-2",k,g,p,2),go("tron",w,b,x,2),go("leo-token",C,f,z,2),go("uniswap",$,_,L,2),go("cosmos",D,j,F,2),go("eos",B,A,I,2),go("ethereum-classic",H,G,E,2),go("litecoin",M,K,J,2),go("okb",P,O,N,2),go("chainlink",T,R,Q,2),go("stellar",W,V,U,2),go("ftx-token",Z,Y,X,2),go("near",oe,ce,ee,2),go("crypto-com-chain",ue,re,te,2),go("algorand",le,de,ne,2),go("monero",ae,ie,me,1),go("bitcoin-cash",Se,qe,ye,1),go("vechain",ve,se,he,4),go("quant-network",ke,ge,pe,2),go("tezos",we,be,xe,2),go("axie-infinity",Ce,fe,ze,2),go("theta-token",$e,_e,Le,2),go("elrond-erd-2",De,je,Fe,2),go("aave",Be,Ae,Ie,2),go("kucoin-shares",He,Ge,Ee,2),go("ripple",Me,Ke,Je,2),go("iota",Pe,Oe,Ne,2),go("ethereum",Te,Re,Qe,2),go("zcash",We,Ve,Ue,2),go("huobi-token",Ze,Ye,Xe,2),go("solana",oc,cc,ec,2),go("evmos",uc,rc,tc,2),go("celsius-degree-token",lc,dc,nc,2),go("pancakeswap-token",ac,ic,mc,2),go("gatechain-token",Sc,qc,yc,2),go("neo",vc,sc,hc,2),go("maker",kc,gc,pc,2),go("helium",wc,bc,xc,2),go("fantom",Cc,fc,zc,2),go("havven",$c,_c,Lc,2),go("binancecoin",Dc,jc,Fc,2),go("osmosis",Bc,Ac,Ic,2),go("nexo",Hc,Gc,Ec,2),go("compound-ether",Mc,Kc,Jc,2),go("arweave",Pc,Oc,Nc,2),go("zilliqa",Tc,Rc,Qc,4),go("thorchain",Wc,Vc,Uc,2),go("dash",Zc,Yc,Xc,2),go("rocket-pool",oo,co,eo,2),go("blockstack",uo,ro,to,3),go("waves",mo,lo,no,2),go("kava",yo,ao,io,2),go("xdce-crowd-sale",ho,So,qo,4),go("compound-governance-token",po,vo,so,2),console.log("Data Fetched")}),1e3);
//# sourceMappingURL=index.b37e6706.js.map

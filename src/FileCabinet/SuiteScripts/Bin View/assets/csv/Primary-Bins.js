const CSV = `Aisle,BinGroup,OddEven,bay-number,BinType,BinTypeShort,picking-bin
A,A01,ODD,A01A,Pallet - Oversize,P-OS,Yes
A,A03,ODD,A03A,Pallet - Half Height,P-HH,Yes
A,A03,ODD,A03B,Pallet - Half Height,P-HH,Yes
A,A03,ODD,A03C,Bulk - Half Height,B-HH,No
A,A03,ODD,A03D,Bulk - Full Height,B-FH,No
A,A04,EVEN,A04A,Pallet - Half Height,P-HH,Yes
A,A04,EVEN,A04B,Pallet - Half Height,P-HH,Yes
A,A04,EVEN,A04C,Bulk - Half Height,B-HH,No
A,A04,EVEN,A04D,Bulk - Full Height,B-FH,No
A,A05,ODD,A05A,Pallet - Half Height,P-HH,Yes
A,A05,ODD,A05B,Pallet - Half Height,P-HH,Yes
A,A05,ODD,A05C,Bulk - Half Height,B-HH,No
A,A05,ODD,A05D,Bulk - Full Height,B-FH,No
A,A06,EVEN,A06A,Pallet - Half Height,P-HH,Yes
A,A06,EVEN,A06B,Pallet - Half Height,P-HH,Yes
A,A06,EVEN,A06C,Bulk - Half Height,B-HH,No
A,A06,EVEN,A06D,Bulk - Full Height,B-FH,No
A,A07,ODD,A07A,Pallet - Half Height,P-HH,Yes
A,A07,ODD,A07B,Pallet - Half Height,P-HH,Yes
A,A07,ODD,A07C,Bulk - Half Height,B-HH,No
A,A07,ODD,A07D,Bulk - Full Height,B-FH,No
A,A08,EVEN,A08A,Pallet - Half Height,P-HH,Yes
A,A08,EVEN,A08B,Pallet - Half Height,P-HH,Yes
A,A08,EVEN,A08C,Bulk - Half Height,B-HH,No
A,A08,EVEN,A08D,Bulk - Full Height,B-FH,No
A,A09,ODD,A09A,Pallet - Half Height,P-HH,Yes
A,A09,ODD,A09B,Pallet - Half Height,P-HH,Yes
A,A09,ODD,A09C,Bulk - Half Height,B-HH,No
A,A09,ODD,A09D,Bulk - Full Height,B-FH,No
A,A10,EVEN,A10A,Pallet - Half Height,P-HH,Yes
A,A10,EVEN,A10B,Pallet - Half Height,P-HH,Yes
A,A10,EVEN,A10C,Bulk - Half Height,B-HH,No
A,A10,EVEN,A10D,Bulk - Full Height,B-FH,No
A,A11,ODD,A11A,Pallet - Half Height,P-HH,Yes
A,A11,ODD,A11B,Pallet - Half Height,P-HH,Yes
A,A11,ODD,A11C,Bulk - Half Height,B-HH,No
A,A11,ODD,A11D,Bulk - Full Height,B-FH,No
A,A12,EVEN,A12A,Pallet - Half Height,P-HH,Yes
A,A12,EVEN,A12B,Pallet - Half Height,P-HH,Yes
A,A12,EVEN,A12C,Bulk - Half Height,B-HH,No
A,A12,EVEN,A12D,Bulk - Full Height,B-FH,No
A,A13,ODD,A13A,Pallet - Half Height,P-HH,Yes
A,A13,ODD,A13B,Pallet - Half Height,P-HH,Yes
A,A13,ODD,A13C,Bulk - Half Height,B-HH,No
A,A13,ODD,A13D,Bulk - Full Height,B-FH,No
A,A14,EVEN,A14B,Bulk - Tiny Height,B-TH,No
A,A14,EVEN,A14C,Bulk - Full Height,B-FH,No
A,A15,ODD,A15A,Pallet - Full Height,P-FH,Yes
A,A15,ODD,A15B,Bulk - Half Height,B-HH,No
A,A15,ODD,A15C,Bulk - Half Height,B-HH,No
A,A16,EVEN,A16A,Bulk - Full Height,B-FH,No
A,A16,EVEN,A16B,Bulk - Half Height,B-HH,No
A,A16,EVEN,A16C,Bulk - Full Height,B-FH,No
A,A17,ODD,A17A,Pallet - Full Height,P-FH,Yes
A,A17,ODD,A17B,Bulk - Half Height,B-HH,No
A,A17,ODD,A17C,Bulk - Full Height,B-FH,No
A,A18,EVEN,A18A,Bulk - Full Height,B-FH,No
A,A18,EVEN,A18B,Bulk - Half Height,B-HH,No
A,A18,EVEN,A18C,Bulk - Full Height,B-FH,No
A,A19,ODD,A19A,Bulk - Full Height,B-FH,No
A,A19,ODD,A19B,Bulk - Half Height,B-HH,No
A,A19,ODD,A19C,Bulk - Full Height,B-FH,No
A,A20,EVEN,A20A,Bulk - Full Height,B-FH,No
A,A20,EVEN,A20B,Bulk - Half Height,B-HH,No
A,A20,EVEN,A20C,Bulk - Full Height,B-FH,No
A,A21,ODD,A21A,Goods Out Zone,GO,No
A,A21,ODD,A21B,Bulk - Half Height,B-HH,No
A,A21,ODD,A21C,Bulk - Full Height,B-FH,No
A,A22,EVEN,A22B,Bulk - Half Height,B-HH,No
A,A22,EVEN,A22C,Bulk - Full Height,B-FH,No
A,A23,ODD,A23A,Goods Out Zone,GO,No
A,A23,ODD,A23B,Bulk - Tiny Height,B-TH,No
A,A23,ODD,A23C,Bulk - Full Height,B-FH,No
A,A24,EVEN,A24B,Bulk - Tiny Height,B-TH,No
A,A24,EVEN,A24C,Bulk - Full Height,B-FH,No
A,A25,ODD,A25A,Goods Out Zone,GO,No
A,A25,ODD,A25B,Bulk - Half Height,B-HH,No
A,A25,ODD,A25C,Bulk - Full Height,B-FH,No
A,A26,EVEN,A26B,Bulk - Tiny Height,B-TH,No
A,A26,EVEN,A26C,Bulk - Full Height,B-FH,No
A,A27,ODD,A27A,Goods Out Zone,GO,No
A,A27,ODD,A27B,Bulk - Half Height,B-HH,No
A,A27,ODD,A27C,Bulk - Full Height,B-FH,No
A,A28,EVEN,A28B,Bulk - Tiny Height,B-TH,No
A,A28,EVEN,A28C,Bulk - Full Height,B-FH,No
A,A29,ODD,A29A,Goods Out Zone,GO,No
A,A29,ODD,A29B,Bulk - Half Height,B-HH,No
A,A29,ODD,A29C,Bulk - Full Height,B-FH,No
B,B03,ODD,B03A,Pallet - Full Height,P-FH,Yes
B,B03,ODD,B03B,Bulk - Half Height,B-HH,No
B,B03,ODD,B03C,Bulk - Full Height,B-FH,No
B,B04,EVEN,B04A,Pallet - Full Height,P-FH,Yes
B,B04,EVEN,B04B,Bulk - Half Height,B-HH,No
B,B04,EVEN,B04C,Bulk - Full Height,B-FH,No
B,B05,ODD,B05A,Pallet - Full Height,P-FH,Yes
B,B05,ODD,B05B,Bulk - Half Height,B-HH,No
B,B05,ODD,B05C,Bulk - Full Height,B-FH,No
B,B06,EVEN,B06A,Pallet - Full Height,P-FH,Yes
B,B06,EVEN,B06B,Bulk - Half Height,B-HH,No
B,B06,EVEN,B06C,Bulk - Full Height,B-FH,No
B,B07,ODD,B07A,Pallet - Full Height,P-FH,Yes
B,B07,ODD,B07B,Bulk - Half Height,B-HH,No
B,B07,ODD,B07C,Bulk - Full Height,B-FH,No
B,B08,EVEN,B08A,Pallet - Full Height,P-FH,Yes
B,B08,EVEN,B08B,Bulk - Half Height,B-HH,No
B,B08,EVEN,B08C,Bulk - Full Height,B-FH,No
B,B09,ODD,B09A,Pallet - Full Height,P-FH,Yes
B,B09,ODD,B09B,Bulk - Half Height,B-HH,No
B,B09,ODD,B09C,Bulk - Full Height,B-FH,No
B,B10,EVEN,B10A,Pallet - Full Height,P-FH,Yes
B,B10,EVEN,B10B,Bulk - Half Height,B-HH,No
B,B10,EVEN,B10C,Bulk - Full Height,B-FH,No
B,B11,ODD,B11A,Pallet - Full Height,P-FH,Yes
B,B11,ODD,B11B,Bulk - Half Height,B-HH,No
B,B11,ODD,B11C,Bulk - Full Height,B-FH,No
B,B12,EVEN,B12A,Pallet - Full Height,P-FH,Yes
B,B12,EVEN,B12B,Bulk - Half Height,B-HH,No
B,B12,EVEN,B12C,Bulk - Full Height,B-FH,No
B,B13,ODD,B13B,Bulk - Tiny Height,B-TH,No
B,B13,ODD,B13C,Bulk - Full Height,B-FH,No
B,B14,EVEN,B14B,Bulk - Tiny Height,B-TH,No
B,B14,EVEN,B14C,Bulk - Full Height,B-FH,No
B,B15,ODD,B15A,Goods Out Zone,GO,No
B,B15,ODD,B15B,Bulk - Half Height,B-HH,No
B,B15,ODD,B15C,Bulk - Full Height,B-FH,No
B,B16,EVEN,B16A,Goods Out Zone,GO,No
B,B16,EVEN,B16B,Goods Out Zone,GO,No
B,B16,EVEN,B16C,Bulk - Half Height,B-HH,No
B,B16,EVEN,B16D,Bulk - Full Height,B-FH,No
B,B17,ODD,B17A,Goods Out Zone,GO,No
B,B17,ODD,B17B,Bulk - Half Height,B-HH,No
B,B17,ODD,B17C,Bulk - Full Height,B-FH,No
B,B18,EVEN,B18A,Goods Out Zone,GO,No
B,B18,EVEN,B18B,Goods Out Zone,GO,No
B,B18,EVEN,B18C,Bulk - Half Height,B-HH,No
B,B18,EVEN,B18D,Bulk - Full Height,B-FH,No
B,B19,ODD,B19A,Goods Out Zone,GO,No
B,B19,ODD,B19B,Bulk - Half Height,B-HH,No
B,B19,ODD,B19C,Bulk - Full Height,B-FH,No
B,B20,EVEN,B20B,Bulk - Half Height,B-HH,No
B,B20,EVEN,B20C,Bulk - Full Height,B-FH,No
B,B21,ODD,B21B,Bulk - Half Height,B-HH,No
B,B21,ODD,B21C,Bulk - Full Height,B-FH,No
B,B22,EVEN,B22B,Bulk - Half Height,B-HH,No
B,B22,EVEN,B22C,Bulk - Full Height,B-FH,No
B,B23,ODD,B23B,Bulk - Half Height,B-HH,No
B,B23,ODD,B23C,Bulk - Full Height,B-FH,No
B,B24,EVEN,B24B,Bulk - Half Height,B-HH,No
B,B24,EVEN,B24C,Bulk - Full Height,B-FH,No
B,B25,ODD,B25B,Bulk - Half Height,B-HH,No
B,B25,ODD,B25C,Bulk - Full Height,B-FH,No
B,B26,EVEN,B26B,Bulk - Half Height,B-HH,No
B,B26,EVEN,B26C,Bulk - Full Height,B-FH,No
B,B27,ODD,B27B,Bulk - Half Height,B-HH,No
B,B27,ODD,B27C,Bulk - Full Height,B-FH,No
B,B28,EVEN,B28B,Bulk - Half Height,B-HH,No
B,B28,EVEN,B28C,Bulk - Full Height,B-FH,No
C,C02,EVEN,C02A,Shelf - Racking,S-R,Yes
C,C02,EVEN,C02B,Shelf - Racking,S-R,Yes
C,C02,EVEN,C02C,Shelf - Racking,S-R,Yes
C,C02,EVEN,C02D,Bulk - Half Height,B-HH,No
C,C02,EVEN,C02E,Bulk - Full Height,B-FH,No
C,C03,ODD,C03A,Shelf - Racking,S-R,Yes
C,C03,ODD,C03B,Shelf - Racking,S-R,Yes
C,C03,ODD,C03C,Shelf - Racking,S-R,Yes
C,C03,ODD,C03D,Bulk - Half Height,B-HH,No
C,C03,ODD,C03E,Bulk - Full Height,B-FH,No
C,C04,EVEN,C04A,Pallet - Full Height,P-FH,Yes
C,C04,EVEN,C04B,Bulk - Half Height,B-HH,No
C,C04,EVEN,C04C,Bulk - Full Height,B-FH,No
C,C05,ODD,C05A,Shelf - Racking,S-R,Yes
C,C05,ODD,C05B,Shelf - Racking,S-R,Yes
C,C05,ODD,C05C,Shelf - Racking,S-R,Yes
C,C05,ODD,C05D,Bulk - Half Height,B-HH,No
C,C05,ODD,C05E,Bulk - Full Height,B-FH,No
C,C06,EVEN,C06A,Pallet - Full Height,P-FH,Yes
C,C06,EVEN,C06B,Bulk - Half Height,B-HH,No
C,C06,EVEN,C06C,Bulk - Full Height,B-FH,No
C,C07,ODD,C07A,Shelf - Racking,S-R,Yes
C,C07,ODD,C07B,Shelf - Racking,S-R,Yes
C,C07,ODD,C07C,Shelf - Racking,S-R,Yes
C,C07,ODD,C07D,Bulk - Half Height,B-HH,No
C,C07,ODD,C07E,Bulk - Full Height,B-FH,No
C,C08,EVEN,C08A,Pallet - Full Height,P-FH,Yes
C,C08,EVEN,C08B,Bulk - Half Height,B-HH,No
C,C08,EVEN,C08C,Bulk - Full Height,B-FH,No
C,C09,ODD,C09A,Shelf - Racking,S-R,Yes
C,C09,ODD,C09B,Shelf - Racking,S-R,Yes
C,C09,ODD,C09C,Shelf - Racking,S-R,Yes
C,C09,ODD,C09D,Bulk - Half Height,B-HH,No
C,C09,ODD,C09E,Bulk - Full Height,B-FH,No
C,C10,EVEN,C10A,Pallet - Full Height,P-FH,Yes
C,C10,EVEN,C10B,Bulk - Half Height,B-HH,No
C,C10,EVEN,C10C,Bulk - Full Height,B-FH,No
C,C11,ODD,C11A,Shelf - Racking,S-R,Yes
C,C11,ODD,C11B,Shelf - Racking,S-R,Yes
C,C11,ODD,C11C,Shelf - Racking,S-R,Yes
C,C11,ODD,C11D,Bulk - Half Height,B-HH,No
C,C11,ODD,C11E,Bulk - Full Height,B-FH,No
C,C12,EVEN,C12A,Pallet - Full Height,P-FH,Yes
C,C12,EVEN,C12B,Bulk - Half Height,B-HH,No
C,C12,EVEN,C12C,Bulk - Full Height,B-FH,No
C,C13,ODD,C13B,Bulk - Tiny Height,B-TH,No
C,C13,ODD,C13C,Bulk - Full Height,B-FH,No
C,C14,EVEN,C14B,Bulk - Half Height,B-HH,No
C,C14,EVEN,C14C,Bulk - Full Height,B-FH,No
C,C15,ODD,C15A,Pallet - Full Height,P-FH,Yes
C,C15,ODD,C15B,Bulk - Half Height,B-HH,No
C,C15,ODD,C15C,Bulk - Full Height,B-FH,No
C,C16,EVEN,C16A,Shelf - Racking,S-R,Yes
C,C16,EVEN,C16B,Shelf - Racking,S-R,Yes
C,C16,EVEN,C16C,Shelf - Racking,S-R,Yes
C,C16,EVEN,C16D,Bulk - Half Height,B-HH,No
C,C16,EVEN,C16E,Bulk - Full Height,B-FH,No
C,C17,ODD,C17A,Pallet - Full Height,P-FH,Yes
C,C17,ODD,C17B,Bulk - Half Height,B-HH,No
C,C17,ODD,C17C,Bulk - Full Height,B-FH,No
C,C18,EVEN,C18A,Shelf - Racking,S-R,Yes
C,C18,EVEN,C18B,Shelf - Racking,S-R,Yes
C,C18,EVEN,C18C,Shelf - Racking,S-R,Yes
C,C18,EVEN,C18D,Bulk - Half Height,B-HH,No
C,C18,EVEN,C18E,Bulk - Full Height,B-FH,No
C,C19,ODD,C19A,Pallet - Full Height,P-FH,Yes
C,C19,ODD,C19B,Bulk - Half Height,B-HH,No
C,C19,ODD,C19C,Bulk - Full Height,B-FH,No
C,C20,EVEN,C20A,Pallet - Half Height,P-HH,Yes
C,C20,EVEN,C20B,Pallet - Half Height,P-HH,Yes
C,C20,EVEN,C20C,Bulk - Half Height,B-HH,No
C,C20,EVEN,C20D,Bulk - Full Height,B-FH,No
C,C21,ODD,C21A,Pallet - Full Height,P-FH,Yes
C,C21,ODD,C21B,Bulk - Half Height,B-HH,No
C,C21,ODD,C21C,Bulk - Full Height,B-FH,No
C,C22,EVEN,C22A,Pallet - Half Height,P-HH,Yes
C,C22,EVEN,C22B,Pallet - Half Height,P-HH,Yes
C,C22,EVEN,C22C,Bulk - Half Height,B-HH,No
C,C22,EVEN,C22D,Bulk - Full Height,B-FH,No
C,C23,ODD,C23A,Pallet - Full Height,P-FH,Yes
C,C23,ODD,C23B,Bulk - Half Height,B-HH,No
C,C23,ODD,C23C,Bulk - Full Height,B-FH,No
C,C24,EVEN,C24A,Pallet - Full Height,P-FH,Yes
C,C24,EVEN,C24B,Bulk - Half Height,B-HH,No
C,C24,EVEN,C24C,Bulk - Full Height,B-FH,No
C,C25,ODD,C25A,Pallet - Full Height,P-FH,Yes
C,C25,ODD,C25B,Bulk - Half Height,B-HH,No
C,C25,ODD,C25C,Bulk - Full Height,B-FH,No
C,C26,EVEN,C26A,Pallet - Full Height,P-FH,Yes
C,C26,EVEN,C26B,Bulk - Half Height,B-HH,No
C,C26,EVEN,C26C,Bulk - Full Height,B-FH,No
C,C27,ODD,C27A,Pallet - Full Height,P-FH,Yes
C,C27,ODD,C27B,Bulk - Half Height,B-HH,No
C,C27,ODD,C27C,Bulk - Full Height,B-FH,No
D,D01,ODD,D01A,Shelf - Low Bay,S-L,Yes
D,D01,ODD,D01B,Shelf - Low Bay,S-L,Yes
D,D01,ODD,D01C,Shelf - Low Bay,S-L,Yes
D,D01,ODD,D01D,Shelf - Low Bay,S-L,Yes
D,D02,EVEN,D02A,Shelf - Low Bay,S-L,Yes
D,D02,EVEN,D02B,Shelf - Low Bay,S-L,Yes
D,D02,EVEN,D02C,Shelf - Low Bay,S-L,Yes
D,D02,EVEN,D02D,Shelf - Low Bay,S-L,Yes
D,D03,ODD,D03A,Shelf - Low Bay,S-L,Yes
D,D03,ODD,D03B,Shelf - Low Bay,S-L,Yes
D,D03,ODD,D03C,Shelf - Low Bay,S-L,Yes
D,D03,ODD,D03D,Shelf - Low Bay,S-L,Yes
D,D04,EVEN,D04A,Shelf - Low Bay,S-L,Yes
D,D04,EVEN,D04B,Shelf - Low Bay,S-L,Yes
D,D04,EVEN,D04C,Shelf - Low Bay,S-L,Yes
D,D04,EVEN,D04D,Shelf - Low Bay,S-L,Yes
D,D05,ODD,D05A,Shelf - Low Bay,S-L,Yes
D,D05,ODD,D05B,Shelf - Low Bay,S-L,Yes
D,D05,ODD,D05C,Shelf - Low Bay,S-L,Yes
D,D05,ODD,D05D,Shelf - Low Bay,S-L,Yes
D,D06,EVEN,D06A,Shelf - Low Bay,S-L,Yes
D,D06,EVEN,D06B,Shelf - Low Bay,S-L,Yes
D,D06,EVEN,D06C,Shelf - Low Bay,S-L,Yes
D,D06,EVEN,D06D,Shelf - Low Bay,S-L,Yes
D,D07,ODD,D07A,Shelf - Low Bay,S-L,Yes
D,D07,ODD,D07B,Shelf - Low Bay,S-L,Yes
D,D07,ODD,D07C,Shelf - Low Bay,S-L,Yes
D,D07,ODD,D07D,Shelf - Low Bay,S-L,Yes
D,D08,EVEN,D08A,Shelf - Low Bay,S-L,Yes
D,D08,EVEN,D08B,Shelf - Low Bay,S-L,Yes
D,D08,EVEN,D08C,Shelf - Low Bay,S-L,Yes
D,D08,EVEN,D08D,Shelf - Low Bay,S-L,Yes
D,D09,ODD,D09A,Shelf - Low Bay,S-L,Yes
D,D09,ODD,D09B,Shelf - Low Bay,S-L,Yes
D,D09,ODD,D09C,Shelf - Low Bay,S-L,Yes
D,D09,ODD,D09D,Shelf - Low Bay,S-L,Yes
E,E01,ODD,E01A,Pallet - Half Height,P-HH,Yes
E,E01,ODD,E01B,Pallet - Half Height,P-HH,Yes
E,E01,ODD,E01C,Pallet - Half Height,P-HH,Yes
E,E01,ODD,E01D,Bulk - Full Height,B-FH,No
E,E02,EVEN,E02A,Pallet - Full Height,P-FH,Yes
E,E02,EVEN,E02B,Bulk - Half Height,B-HH,No
E,E02,EVEN,E02C,Bulk - Full Height,B-FH,No
E,E03,ODD,E03A,Pallet - Half Height,P-HH,Yes
E,E03,ODD,E03B,Pallet - Half Height,P-HH,Yes
E,E03,ODD,E03C,Pallet - Half Height,P-HH,Yes
E,E03,ODD,E03D,Bulk - Full Height,B-FH,No
E,E04,EVEN,E04A,Pallet - Half Height,P-HH,Yes
E,E04,EVEN,E04B,Pallet - Half Height,P-HH,Yes
E,E04,EVEN,E04C,Pallet - Half Height,P-HH,Yes
E,E04,EVEN,E04D,Bulk - Full Height,B-FH,No
E,E05,ODD,E05A,Pallet - Half Height,P-HH,Yes
E,E05,ODD,E05B,Pallet - Half Height,P-HH,Yes
E,E05,ODD,E05C,Pallet - Half Height,P-HH,Yes
E,E05,ODD,E05D,Bulk - Full Height,B-FH,No
E,E06,EVEN,E06A,Pallet - Half Height,P-HH,Yes
E,E06,EVEN,E06B,Pallet - Half Height,P-HH,Yes
E,E06,EVEN,E06C,Pallet - Half Height,P-HH,Yes
E,E06,EVEN,E06D,Bulk - Full Height,B-FH,No
E,E07,ODD,E07A,Pallet - Half Height,P-HH,Yes
E,E07,ODD,E07B,Pallet - Half Height,P-HH,Yes
E,E07,ODD,E07C,Pallet - Half Height,P-HH,Yes
E,E07,ODD,E07D,Bulk - Full Height,B-FH,No
E,E08,EVEN,E08A,Pallet - Half Height,P-HH,Yes
E,E08,EVEN,E08B,Pallet - Half Height,P-HH,Yes
E,E08,EVEN,E08C,Pallet - Half Height,P-HH,Yes
E,E08,EVEN,E08D,Bulk - Full Height,B-FH,No
E,E09,ODD,E09A,Pallet - Half Height,P-HH,Yes
E,E09,ODD,E09B,Pallet - Half Height,P-HH,Yes
E,E09,ODD,E09C,Pallet - Half Height,P-HH,Yes
E,E09,ODD,E09D,Bulk - Full Height,B-FH,No
E,E10,EVEN,E10A,Pallet - Half Height,P-HH,Yes
E,E10,EVEN,E10B,Pallet - Half Height,P-HH,Yes
E,E10,EVEN,E10C,Pallet - Half Height,P-HH,Yes
E,E10,EVEN,E10D,Bulk - Full Height,B-FH,No
E,E11,ODD,E11A,Pallet - Half Height,P-HH,Yes
E,E11,ODD,E11B,Pallet - Half Height,P-HH,Yes
E,E11,ODD,E11C,Pallet - Half Height,P-HH,Yes
E,E11,ODD,E11D,Bulk - Full Height,B-FH,No
E,E12,EVEN,E12B,Bulk - Half Height,B-HH,No
E,E12,EVEN,E12C,Bulk - Full Height,B-FH,No
E,E13,ODD,E13B,Bulk - Half Height,B-HH,No
E,E13,ODD,E13C,Bulk - Full Height,B-FH,No
E,E14,EVEN,E14A,Pallet - Half Height,P-HH,Yes
E,E14,EVEN,E14B,Pallet - Half Height,P-HH,Yes
E,E14,EVEN,E14C,Pallet - Half Height,P-HH,Yes
E,E14,EVEN,E14D,Bulk - Full Height,B-FH,No
E,E15,ODD,E15A,Pallet - Half Height,P-HH,Yes
E,E15,ODD,E15B,Pallet - Half Height,P-HH,Yes
E,E15,ODD,E15C,Pallet - Half Height,P-HH,Yes
E,E15,ODD,E15D,Bulk - Full Height,B-FH,No
E,E16,EVEN,E16A,Pallet - Half Height,P-HH,Yes
E,E16,EVEN,E16B,Pallet - Half Height,P-HH,Yes
E,E16,EVEN,E16C,Pallet - Half Height,P-HH,Yes
E,E16,EVEN,E16D,Bulk - Full Height,B-FH,No
E,E17,ODD,E17A,Pallet - Half Height,P-HH,Yes
E,E17,ODD,E17B,Pallet - Half Height,P-HH,Yes
E,E17,ODD,E17C,Pallet - Half Height,P-HH,Yes
E,E17,ODD,E17D,Bulk - Full Height,B-FH,No
E,E18,EVEN,E18A,Pallet - Half Height,P-HH,Yes
E,E18,EVEN,E18B,Pallet - Half Height,P-HH,Yes
E,E18,EVEN,E18C,Pallet - Half Height,P-HH,Yes
E,E18,EVEN,E18D,Bulk - Full Height,B-FH,No
F,F01,ODD,F01A,Pallet - Full Height,P-FH,Yes
F,F01,ODD,F01B,Bulk - Half Height,B-HH,No
F,F01,ODD,F01C,Bulk - Full Height,B-FH,No
F,F02,EVEN,F02A,Pallet - Full Height,P-FH,Yes
F,F02,EVEN,F02B,Bulk - Half Height,B-HH,No
F,F02,EVEN,F02C,Bulk - Full Height,B-FH,No
F,F03,ODD,F03A,Pallet - Full Height,P-FH,Yes
F,F03,ODD,F03B,Bulk - Half Height,B-HH,No
F,F03,ODD,F03C,Bulk - Full Height,B-FH,No
F,F04,EVEN,F04A,Shelf - Racking,S-R,Yes
F,F04,EVEN,F04B,Shelf - Racking,S-R,Yes
F,F04,EVEN,F04C,Shelf - Racking,S-R,Yes
F,F04,EVEN,F04D,Shelf - Racking,S-R,Yes
F,F04,EVEN,F04E,Bulk - Full Height,B-FH,No
F,F05,ODD,F05A,Pallet - Full Height,P-FH,Yes
F,F05,ODD,F05B,Bulk - Half Height,B-HH,No
F,F05,ODD,F05C,Bulk - Full Height,B-FH,No
F,F06,EVEN,F06A,Shelf - Racking,S-R,Yes
F,F06,EVEN,F06B,Shelf - Racking,S-R,Yes
F,F06,EVEN,F06C,Shelf - Racking,S-R,Yes
F,F06,EVEN,F06D,Shelf - Racking,S-R,Yes
F,F06,EVEN,F06E,Bulk - Full Height,B-FH,No
F,F07,ODD,F07A,Shelf - Racking,S-R,Yes
F,F07,ODD,F07B,Shelf - Racking,S-R,Yes
F,F07,ODD,F07C,Shelf - Racking,S-R,Yes
F,F07,ODD,F07D,Shelf - Racking,S-R,Yes
F,F07,ODD,F07E,Bulk - Full Height,B-FH,No
F,F08,EVEN,F08A,Shelf - Racking,S-R,Yes
F,F08,EVEN,F08B,Shelf - Racking,S-R,Yes
F,F08,EVEN,F08C,Shelf - Racking,S-R,Yes
F,F08,EVEN,F08D,Shelf - Racking,S-R,Yes
F,F08,EVEN,F08E,Bulk - Full Height,B-FH,No
F,F09,ODD,F09A,Shelf - Racking,S-R,Yes
F,F09,ODD,F09B,Shelf - Racking,S-R,Yes
F,F09,ODD,F09C,Shelf - Racking,S-R,Yes
F,F09,ODD,F09D,Shelf - Racking,S-R,Yes
F,F09,ODD,F09E,Bulk - Full Height,B-FH,No
F,F10,EVEN,F10A,Shelf - Racking,S-R,Yes
F,F10,EVEN,F10B,Shelf - Racking,S-R,Yes
F,F10,EVEN,F10C,Shelf - Racking,S-R,Yes
F,F10,EVEN,F10D,Shelf - Racking,S-R,Yes
F,F10,EVEN,F10E,Bulk - Full Height,B-FH,No
F,F11,ODD,F11B,Bulk - Half Height,B-HH,No
F,F11,ODD,F11C,Bulk - Full Height,B-FH,No
F,F12,EVEN,F12A,Bulk - Full Height,B-FH,Yes
F,F12,EVEN,F12B,Bulk - Half Height,B-HH,Yes
F,F12,EVEN,F12C,Bulk - Full Height,B-FH,Yes
F,F12,EVEN,F12E,Bulk - Full Height,B-FH,No
F,F13,ODD,F13A,Pallet - Half Height,P-HH,Yes
F,F13,ODD,F13B,Pallet - Half Height,P-HH,Yes
F,F13,ODD,F13C,Pallet - Half Height,P-HH,Yes
F,F13,ODD,F13D,Bulk - Full Height,B-FH,No
F,F14,EVEN,F14A,Shelf - Racking,S-R,Yes
F,F14,EVEN,F14B,Shelf - Racking,S-R,Yes
F,F14,EVEN,F14C,Shelf - Racking,S-R,Yes
F,F14,EVEN,F14D,Shelf - Racking,S-R,Yes
F,F14,EVEN,F14E,Bulk - Full Height,B-FH,No
F,F15,ODD,F15A,Shelf - Racking,S-R,Yes
F,F15,ODD,F15B,Shelf - Racking,S-R,Yes
F,F15,ODD,F15C,Shelf - Racking,S-R,Yes
F,F15,ODD,F15D,Shelf - Racking,S-R,Yes
F,F15,ODD,F15E,Bulk - Full Height,B-FH,No
F,F16,EVEN,F16A,Shelf - Racking,S-R,Yes
F,F16,EVEN,F16B,Shelf - Racking,S-R,Yes
F,F16,EVEN,F16C,Shelf - Racking,S-R,Yes
F,F16,EVEN,F16D,Shelf - Racking,S-R,Yes
F,F16,EVEN,F16E,Bulk - Full Height,B-FH,No
F,F17,ODD,F17A,Shelf - Racking,S-R,Yes
F,F17,ODD,F17B,Shelf - Racking,S-R,Yes
F,F17,ODD,F17C,Shelf - Racking,S-R,Yes
F,F17,ODD,F17D,Shelf - Racking,S-R,Yes
F,F17,ODD,F17E,Bulk - Full Height,B-FH,No
F,F18,EVEN,F18A,Shelf - Racking,S-R,Yes
F,F18,EVEN,F18B,Shelf - Racking,S-R,Yes
F,F18,EVEN,F18C,Shelf - Racking,S-R,Yes
F,F18,EVEN,F18D,Shelf - Racking,S-R,Yes
F,F18,EVEN,F18E,Bulk - Full Height,B-FH,No
G,G01,ODD,G01A,Pallet - Oversize,P-OS,Yes
G,G02,EVEN,G02A,Pallet - Full Height,P-FH,Yes
G,G02,EVEN,G02B,Bulk - Half Height,B-HH,No
G,G02,EVEN,G02C,Bulk - Half Height,B-HH,No
G,G03,ODD,G03A,Pallet - Oversize,P-OS,Yes
G,G04,EVEN,G04A,Pallet - Half Height,P-HH,Yes
G,G04,EVEN,G04B,Pallet - Half Height,P-HH,Yes
G,G04,EVEN,G04C,Pallet - Half Height,P-HH,Yes
G,G04,EVEN,G04D,Bulk - Full Height,B-FH,No
G,G05,ODD,G05A,Pallet - Full Height,P-FH,Yes
G,G05,ODD,G05B,Pallet - Half Height,P-HH,Yes
G,G05,ODD,G05C,Pallet - Full Height,P-FH,Yes
G,G05,ODD,G05D,Bulk - Full Height,B-FH,No
G,G06,EVEN,G06A,Pallet - Half Height,P-HH,Yes
G,G06,EVEN,G06B,Pallet - Half Height,P-HH,Yes
G,G06,EVEN,G06C,Pallet - Half Height,P-HH,Yes
G,G06,EVEN,G06D,Bulk - Full Height,B-FH,No
G,G07,ODD,G07A,Pallet - Full Height,P-FH,Yes
G,G07,ODD,G07B,Pallet - Half Height,P-HH,Yes
G,G07,ODD,G07C,Pallet - Full Height,P-FH,Yes
G,G08,EVEN,G08A,Pallet - Half Height,P-HH,Yes
G,G08,EVEN,G08B,Pallet - Half Height,P-HH,Yes
G,G08,EVEN,G08C,Pallet - Half Height,P-HH,Yes
G,G08,EVEN,G08D,Bulk - Full Height,B-FH,No
G,G09,ODD,G09A,Pallet - Full Height,P-FH,Yes
G,G09,ODD,G09B,Pallet - Half Height,P-HH,Yes
G,G09,ODD,G09C,Pallet - Full Height,P-FH,Yes
G,G10,EVEN,G10A,Pallet - Half Height,P-HH,Yes
G,G10,EVEN,G10B,Pallet - Half Height,P-HH,Yes
G,G10,EVEN,G10C,Pallet - Half Height,P-HH,Yes
G,G10,EVEN,G10D,Bulk - Full Height,B-FH,No
G,G11,ODD,G11A,Bulk - Full Height,B-FH,No
G,G11,ODD,G11B,Pallet - Half Height,P-HH,Yes
G,G11,ODD,G11C,Pallet - Full Height,P-FH,Yes
G,G12,EVEN,G12A,Goods In Zone,GI,No
G,G12,EVEN,G12B,Pallet - Full Height,P-FH,Yes
G,G12,EVEN,G12C,Bulk - Full Height,B-FH,No
G,G13,ODD,G13A,Goods In Zone,GI,No
G,G13,ODD,G13B,Pallet - Full Height,P-FH,Yes
G,G14,EVEN,G14A,Goods In Zone,GI,No
G,G14,EVEN,G14B,Pallet - Full Height,P-FH,Yes
G,G15,ODD,G15A,Goods In Zone,GI,No
G,G15,ODD,G15B,Pallet - Full Height,P-FH,Yes
G,G16,EVEN,G16A,Goods In Zone,GI,No
G,G16,EVEN,G16B,Pallet - Full Height,P-FH,Yes
G,G17,ODD,G17A,Goods In Zone,GI,No
G,G17,ODD,G17B,Pallet - Full Height,P-FH,Yes
G,G18,EVEN,G18A,Goods In Zone,GI,No
G,G18,EVEN,G18B,Pallet - Full Height,P-FH,Yes
H,H01,ODD,H01A,Pallet - Oversize,P-OS,Yes
H,H01,ODD,H01B,Pallet - Half Height,P-HH,Yes
H,H01,ODD,H01C,Pallet - Oversize,P-OS,Yes
H,H02,EVEN,H02A,Pallet - Oversize,P-OS,Yes
H,H02,EVEN,H02B,Pallet - Half Height,P-HH,Yes
H,H02,EVEN,H02C,Pallet - Oversize,P-OS,Yes
H,H03,ODD,H03A,Pallet - Oversize,P-OS,Yes
H,H03,ODD,H03B,Pallet - Half Height,P-HH,Yes
H,H03,ODD,H03C,Pallet - Oversize,P-OS,Yes
H,H04,EVEN,H04B,Pallet - Half Height,P-HH,Yes
H,H04,EVEN,H04C,Pallet - Oversize,P-OS,Yes
H,H05,ODD,H05A,Pallet - Oversize,P-OS,Yes
H,H06,EVEN,H06A,Pallet - Half Height,P-HH,Yes
H,H06,EVEN,H06B,Pallet - Half Height,P-HH,Yes
H,H06,EVEN,H06C,Pallet - Half Height,P-HH,Yes
H,H06,EVEN,H06D,Pallet - Oversize,P-OS,Yes
H,H07,ODD,H07A,Pallet - Oversize,P-OS,Yes
H,H07,ODD,H07B,Pallet - Half Height,P-HH,Yes
H,H07,ODD,H07C,Pallet - Oversize,P-OS,Yes
H,H08,EVEN,H08A,Pallet - Oversize,P-OS,Yes
H,H08,EVEN,H08B,Pallet - Half Height,P-HH,Yes
H,H08,EVEN,H08C,Pallet - Oversize,P-OS,Yes
H,H09,ODD,H09A,Pallet - Oversize,P-OS,Yes
H,H09,ODD,H09B,Pallet - Half Height,P-HH,Yes
H,H09,ODD,H09C,Pallet - Oversize,P-OS,Yes
J,J01,ODD,J01A,Shelf - Racking,S-R,Yes
J,J01,ODD,J01B,Shelf - Racking,S-R,Yes
J,J01,ODD,J01C,Shelf - Racking,S-R,Yes
J,J01,ODD,J01D,Shelf - Racking,S-R,Yes
J,J02,EVEN,J02A,Shelf - Racking,S-R,Yes
J,J02,EVEN,J02B,Shelf - Racking,S-R,Yes
J,J02,EVEN,J02C,Shelf - Racking,S-R,Yes
J,J02,EVEN,J02D,Shelf - Racking,S-R,Yes
J,J03,ODD,J03A,Shelf - Racking,S-R,Yes
J,J03,ODD,J03B,Shelf - Racking,S-R,Yes
J,J03,ODD,J03C,Shelf - Racking,S-R,Yes
J,J03,ODD,J03D,Shelf - Racking,S-R,Yes
J,J04,EVEN,J04A,Shelf - Racking,S-R,Yes
J,J04,EVEN,J04B,Shelf - Racking,S-R,Yes
J,J04,EVEN,J04C,Shelf - Racking,S-R,Yes
J,J04,EVEN,J04D,Shelf - Racking,S-R,Yes
J,J05,ODD,J05A,Shelf - Racking,S-R,Yes
J,J05,ODD,J05B,Shelf - Racking,S-R,Yes
J,J05,ODD,J05C,Shelf - Racking,S-R,Yes
J,J05,ODD,J05D,Shelf - Racking,S-R,Yes
J,J06,EVEN,J06A,Shelf - Racking,S-R,Yes
J,J06,EVEN,J06B,Shelf - Racking,S-R,Yes
J,J06,EVEN,J06C,Shelf - Racking,S-R,Yes
J,J06,EVEN,J06D,Shelf - Racking,S-R,Yes
J,J07,ODD,J07A,Shelf - Racking,S-R,Yes
J,J07,ODD,J07B,Shelf - Racking,S-R,Yes
J,J07,ODD,J07C,Shelf - Racking,S-R,Yes
J,J07,ODD,J07D,Shelf - Racking,S-R,Yes
J,J08,EVEN,J08A,Shelf - Racking,S-R,Yes
J,J08,EVEN,J08B,Shelf - Racking,S-R,Yes
J,J08,EVEN,J08C,Shelf - Racking,S-R,Yes
J,J08,EVEN,J08D,Shelf - Racking,S-R,Yes
J,J09,ODD,J09A,Shelf - Racking,S-R,Yes
J,J09,ODD,J09B,Shelf - Racking,S-R,Yes
J,J09,ODD,J09C,Shelf - Racking,S-R,Yes
J,J09,ODD,J09D,Shelf - Racking,S-R,Yes
J,J10,EVEN,J10A,Shelf - Racking,S-R,Yes
J,J10,EVEN,J10B,Shelf - Racking,S-R,Yes
J,J10,EVEN,J10C,Shelf - Racking,S-R,Yes
J,J10,EVEN,J10D,Shelf - Racking,S-R,Yes
J,J11,ODD,J11A,Shelf - Racking,S-R,Yes
J,J11,ODD,J11B,Shelf - Racking,S-R,Yes
J,J11,ODD,J11C,Shelf - Racking,S-R,Yes
J,J11,ODD,J11D,Shelf - Racking,S-R,Yes
J,J12,EVEN,J12A,Shelf - Racking,S-R,Yes
J,J12,EVEN,J12B,Shelf - Racking,S-R,Yes
J,J12,EVEN,J12C,Shelf - Racking,S-R,Yes
J,J12,EVEN,J12D,Shelf - Racking,S-R,Yes
J,J13,ODD,J13A,Shelf - Racking,S-R,Yes
J,J13,ODD,J13B,Shelf - Racking,S-R,Yes
J,J13,ODD,J13C,Shelf - Racking,S-R,Yes
J,J13,ODD,J13D,Shelf - Racking,S-R,Yes
J,J14,EVEN,J14A,Shelf - Racking,S-R,Yes
J,J14,EVEN,J14B,Shelf - Racking,S-R,Yes
J,J14,EVEN,J14C,Shelf - Racking,S-R,Yes
J,J14,EVEN,J14D,Shelf - Racking,S-R,Yes
J,J15,ODD,J15A,Shelf - Racking,S-R,Yes
J,J15,ODD,J15B,Shelf - Racking,S-R,Yes
J,J15,ODD,J15C,Shelf - Racking,S-R,Yes
J,J15,ODD,J15D,Shelf - Racking,S-R,Yes
J,J16,EVEN,J16A,Shelf - Racking,S-R,Yes
J,J16,EVEN,J16B,Shelf - Racking,S-R,Yes
J,J16,EVEN,J16C,Shelf - Racking,S-R,Yes
J,J16,EVEN,J16D,Shelf - Racking,S-R,Yes
J,J17,ODD,J17A,Shelf - Racking,S-R,Yes
J,J17,ODD,J17B,Shelf - Racking,S-R,Yes
J,J17,ODD,J17C,Shelf - Racking,S-R,Yes
J,J17,ODD,J17D,Shelf - Racking,S-R,Yes
J,J18,EVEN,J18A,Shelf - Racking,S-R,Yes
J,J18,EVEN,J18B,Shelf - Racking,S-R,Yes
J,J18,EVEN,J18C,Shelf - Racking,S-R,Yes
J,J18,EVEN,J18D,Shelf - Racking,S-R,Yes
K,K01,ODD,K01A,Shelf - Low Bay,S-L,Yes
M,M01,ODD,M01A,Shelf - Low Bay,S-L,Yes
M,M01,ODD,M01B,Shelf - Low Bay,S-L,Yes
M,M01,ODD,M01C,Shelf - Low Bay,S-L,Yes
M,M01,ODD,M01D,Shelf - Low Bay,S-L,Yes
M,M02,EVEN,M02A,Shelf - Low Bay,S-L,Yes
M,M02,EVEN,M02B,Shelf - Low Bay,S-L,Yes
M,M02,EVEN,M02C,Shelf - Low Bay,S-L,Yes
M,M02,EVEN,M02D,Shelf - Low Bay,S-L,Yes
M,M03,ODD,M03A,Shelf - Low Bay,S-L,Yes
M,M03,ODD,M03B,Shelf - Low Bay,S-L,Yes
M,M03,ODD,M03C,Shelf - Low Bay,S-L,Yes
M,M03,ODD,M03D,Shelf - Low Bay,S-L,Yes
M,M04,EVEN,M04A,Shelf - Low Bay,S-L,Yes
M,M04,EVEN,M04B,Shelf - Low Bay,S-L,Yes
M,M04,EVEN,M04C,Shelf - Low Bay,S-L,Yes
M,M04,EVEN,M04D,Shelf - Low Bay,S-L,Yes
M,M05,ODD,M05A,Shelf - Low Bay,S-L,Yes
M,M05,ODD,M05B,Shelf - Low Bay,S-L,Yes
M,M05,ODD,M05C,Shelf - Low Bay,S-L,Yes
M,M05,ODD,M05D,Shelf - Low Bay,S-L,Yes
,,,Returns - Parts,Shelf - Low Bay,S-L,Yes
T,TR00,ODD,TR001,Trolley,TR,No
T,TR00,EVEN,TR002,Trolley,TR,No
T,TR00,ODD,TR003,Trolley,TR,No
T,TR00,EVEN,TR004,Trolley,TR,No
T,TR00,ODD,TR005,Trolley,TR,No
T,TR00,EVEN,TR006,Trolley,TR,No
T,TR00,ODD,TR007,Trolley,TR,No
T,TR00,EVEN,TR008,Trolley,TR,No
T,TR00,ODD,TR009,Trolley,TR,No
T,TR01,EVEN,TR010,Trolley,TR,No
T,TR01,ODD,TR011,Trolley,TR,No
T,TR01,EVEN,TR012,Trolley,TR,No
T,TR01,ODD,TR013,Trolley,TR,No
T,TR01,EVEN,TR014,Trolley,TR,No
T,TR01,ODD,TR015,Trolley,TR,No
T,TR01,EVEN,TR016,Trolley,TR,No
T,TR01,ODD,TR017,Trolley,TR,No
T,TR01,EVEN,TR018,Trolley,TR,No
T,TR01,ODD,TR019,Trolley,TR,No
T,TR02,EVEN,TR020,Trolley,TR,No
T,TR02,ODD,TR021,Trolley,TR,No
T,TR02,EVEN,TR022,Trolley,TR,No
T,TR02,ODD,TR023,Trolley,TR,No
T,TR02,EVEN,TR024,Trolley,TR,No
T,TR02,ODD,TR025,Trolley,TR,No
T,TR02,EVEN,TR026,Trolley,TR,No
T,TR02,ODD,TR027,Trolley,TR,No
T,TR02,EVEN,TR028,Trolley,TR,No
T,TR02,ODD,TR029,Trolley,TR,No
T,TR03,EVEN,TR030,Trolley,TR,No
T,TR03,ODD,TR031,Trolley,TR,No
T,TR03,EVEN,TR032,Trolley,TR,No
T,TR03,ODD,TR033,Trolley,TR,No
,,EVEN,UNKNOWN,Unknown,UN,No
Z,Z99,ODD,Z99A,Shelf - Racking,S-R,Yes`

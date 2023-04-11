
import React from 'react';
import '../style-sheets/Services.css'; // Archivo de estilos CSS
import AboutImage from "../assets/gabos.png";




const Services= ()=> {
  return (
    <div className="service component__space" id="Services">
            

            <div className="container-s" style={{width: "75%"}}>
                <div className="heading">
                    <h1 className="heading">Proceso de Trabajo</h1>
                    
                </div>
                <div className="row">


                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.35em"
                    height="1.35em"
                    version="1"
                    viewBox="0 0 512 512"
                    >
                    <path
                        d="M4050 5098c-27-7-147-121-540-514l-505-504H671l-3 386-3 386-24 19c-47 38-191 18-320-44-93-45-206-159-254-254-72-146-68-30-65-1878l3-1660 24-70c47-140 160-272 285-334 129-63 74-61 1371-61h1180l-222-222c-246-246-258-264-210-312l26-26h2612l24 25 25 24v1301c0 814-4 1308-10 1319-5 10-22 24-39 30-42 18-67 1-191-123l-105-106-5 775-5 774-23 23c-22 23-26 23-324 26l-302 3 222 222c143 144 227 235 237 259 21 52 19 133-5 183-12 25-82 102-173 192-120 118-161 153-192 162-48 13-107 13-155-1zm252-276c175-175 174-169 53-291l-85-86-172 173-173 172 86 85c122 121 116 122 291-53zM520 3585c0-1132 0-1145 20-1165 38-38 100-22 119 31 8 22 11 252 11 750v719h2174l-217-218c-119-120-217-225-217-235 0-54 54-97 101-78 13 5 258 244 544 530l520 521 172-172 173-173-777-777-778-778-172 172-173 173 160 160c174 176 184 192 135 240-49 50-62 42-273-168l-194-194-127-359-127-359-143-5c-135-5-144-6-162-29-25-31-24-69 3-98l21-23h2138l24 25c30 29 32 64 6 96l-19 24-758 5-757 5 224 78 224 79 780 779 780 779h665V2325l-550-550c-475-475-550-554-550-580 0-39 35-75 74-75 28 0 105 74 703 672l673 673v-663l-84-3c-98-5-126-21-126-76 0-58 26-73 125-73h85v-230h-82c-96 0-128-19-128-76 0-54 36-74 131-74h79v-230h-85c-99 0-125-15-125-73 0-55 28-71 126-76l84-3V672l-84-3c-98-5-126-21-126-76 0-58 26-73 125-73h85V160H2665l393 393c223 223 392 400 392 410 0 22-18 59-34 69-6 4-26 8-45 8-31 0-50-15-196-160l-161-160H1769c-1340 0-1298-2-1401 51-59 30-140 115-171 179-73 149-51 311 59 446 66 82 210 154 308 154 33 0 52 6 73 24l28 24v301c0 296 0 301-22 322-27 27-75 29-103 4-19-17-20-30-20-271v-253l-42-11c-122-32-192-66-276-137l-52-45v1409c0 974 3 1428 11 1468 20 108 89 217 176 277 52 35 127 67 161 68h22V3585zm3475 925l170-170-70-70-70-70-172 172-173 173 67 67c37 38 70 68 73 68s82-76 175-170zM2207 2458c-7-4-54-22-106-39l-93-31-71 70-70 70 38 107 38 107 138-138c94-94 134-141 126-146z"
                        transform="matrix(.1 0 0 -.1 0 512)"
                    ></path>
                    <path
                        d="M4038 1082c-408-408-428-429-428-464 0-28 6-42 26-57 26-21 37-21 450-21 301 0 430 3 449 12 16 7 29 24 36 47 6 23 9 183 7 454l-3 419-24 19c-13 10-37 19-54 19-28 0-78-47-459-428zm392-112V690h-565l280 280c154 154 281 280 282 280 2 0 3-126 3-280z"
                        transform="matrix(.1 0 0 -.1 0 512)"
                    ></path>
                    </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Diseño</h1>
                                <p className="p service__text p__color">
                                    Planificamos y visualizamos tus projectos.
                                </p>
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.35em"
      height="1.35em"
      version="1"
      viewBox="0 0 512 512"
    >
      <path
        d="M145 5096c-59-27-106-77-129-137-15-40-16-159-14-1389l3-1345 22-41c12-22 38-55 57-72 65-57 105-62 453-62h313l2-1001 3-1001 28-24 28-24h2069c1495 0 2076 3 2093 11 14 6 30 22 36 36 15 34 15 633 0 667-14 29-59 51-89 41-11-4-30-16-40-28-19-20-20-36-20-294V160H1020v1889l593 3c585 3 592 3 632 25 22 12 54 36 72 55 66 68 63 32 63 842v735l-26 20c-47 37-103 22-124-33-6-18-10-269-10-732 0-688 0-704-20-724-11-11-30-22-42-25-13-3-457-4-986-3l-964 3-24 28-24 28v1309c0 938 3 1316 11 1333 6 14 22 30 36 36 17 8 304 11 992 11 939 0 970-1 992-19l24-19 5-425 5-425 24-26c30-32 69-34 105-5l26 20v639h1719l3-399 3-399 24-26 24-26h807V1079l25-24c32-33 78-33 110 0l25 24v1431c0 1220-2 1435-14 1458-8 15-210 222-448 459l-434 433-919 2-920 3-6 46c-9 59-30 99-75 143-71 69-19 66-1118 66H195l-50-24zm4415-801l285-285h-575v285c0 157 1 285 3 285 1 0 130-128 287-285z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
      <path
        d="M282 4837c-21-23-22-31-22-268 0-244 0-246 23-267l23-22h881c485 0 889 3 898 6 39 15 45 54 45 277 0 221-7 269-40 287-12 6-345 10-903 10H303l-21-23zm1688-267v-130H420v260h1550v-130zM2773 4498c-49-55-41-76 74-200l89-96 23-123c13-68 30-138 37-154 22-49 1300-1319 1354-1345 67-34 150-32 218 5 145 79 185 246 89 368l-30 39 71 71c77 79 87 99 69 139-15 33-448 445-482 458-53 20-113-32-100-88 4-19 33-55 78-98 40-38 128-122 196-187l124-118-28-29c-16-17-33-30-39-30s-274 263-596 584l-585 584-150 28-150 28-90 93c-75 77-95 93-121 93-19 0-38-8-51-22zm881-757l386-386-65-65-65-65-385 385c-417 417-386 378-410 511l-7 36 80-15 81-16 385-385zm896-928c0-63-70-112-126-88-16 7-112 97-214 199l-185 186 65 65 65 66 198-199c169-170 197-203 197-229zM285 4155c-25-24-25-25-25-228 0-268-21-247 247-247 269 0 247-20 251 231 3 207-2 238-44 258-16 7-95 11-215 11-188 0-190 0-214-25zm315-225v-90H420v180h180v-90zM983 4168c-39-19-44-53-41-257 4-251-18-231 252-231 267 0 246-21 246 247 0 269 21 247-237 250-126 1-206-2-220-9zm297-238v-90h-180v180h180v-90zM1653 4156l-28-24-3-163c-4-191 2-242 31-269 19-19 35-20 224-20 188 0 204 1 222 19 29 29 33 66 29 260l-3 173-28 24c-28 24-32 24-222 24s-194 0-222-24zm317-226v-90h-180v180h180v-90zM317 3490c-54-17-56-27-57-247 0-188 1-204 19-222 29-29 66-33 260-29l173 3 24 29 25 28-3 199c-4 262 14 243-231 246-100 1-195-2-210-7zm283-250v-90H420v180h180v-90zM1003 3493c-13-2-32-16-43-30-18-24-20-40-20-219 0-189 0-193 24-221l24-28 173-3c194-4 231 0 260 29 18 18 19 34 19 222v204l-26 24c-25 23-30 24-207 26-100 0-192-1-204-4zm277-253v-90h-180v180h180v-90zM1673 3485c-53-23-54-37-51-608l3-519 28-24c28-24 31-24 225-24 212 1 222 3 242 54 13 36 14 1044 0 1081-17 45-60 55-247 55-120-1-177-5-200-15zm297-585v-430h-180v860h180v-430zM286 2789l-26-20v-418l26-20c25-20 39-21 223-21 205 1 216 3 239 47 16 30 16 376 0 406-23 44-34 46-239 47-184 0-198-1-223-21zm314-229v-90H420v180h180v-90zM982 2803c-34-14-42-59-42-243 0-188 8-229 45-244 9-3 104-6 211-6 263 0 244-19 244 250 0 270 19 250-247 249-109 0-204-3-211-6zm298-243v-90h-180v180h180v-90zM3400 2625c-226-36-458-148-621-302-68-65-82-92-67-133 12-32 37-49 73-50 24 0 48 15 110 70 203 182 420 265 690 265 217 0 394-53 568-168 604-402 618-1282 27-1699-106-74-207-121-345-160-93-25-299-35-402-18-387 62-706 333-827 704-35 106-47 188-47 318 0 161 23 269 90 425 37 87 38 107 6 138-26 27-63 32-97 14-39-21-112-211-143-371-20-105-20-306-1-418 70-393 346-737 714-891 136-56 251-80 412-86 162-6 268 8 411 53 526 166 878 701 819 1245-29 277-139 514-327 710-272 282-659 414-1043 354z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
      <path
        d="M3535 2291c-34-14-47-38-52-99l-6-59-69-6c-140-12-229-97-244-234-11-108 0-332 20-378 38-89 127-145 234-145h62V930h-129c-115 0-131-2-155-21-37-29-37-89 0-118 24-19 40-21 154-21h127l6-61c9-100 70-140 132-86 22 18 27 34 32 85l6 62h81c122 1 200 43 249 135 19 35 22 60 25 212 5 211-6 262-73 328-52 52-117 75-217 75h-68v450h151c83 0 158 4 168 10 31 16 45 64 29 96-22 47-49 54-205 54h-143v33c0 42-17 102-33 115-19 16-60 22-82 13zm-55-541v-220h-53c-45 0-58 4-78 26-23 24-24 34-28 167-4 169 6 212 52 232 18 8 49 14 70 15h37v-220zm342-418c22-22 23-30 23-188V978l-28-24c-24-20-39-24-98-24h-69v432l75-4c61-3 79-7 97-26zM1395 1415c-43-42-28-103 29-125 38-14 543-13 585 1 55 19 70 88 28 127-23 22-29 22-321 22h-297l-24-25zM1435 1013c-64-16-86-90-39-134l26-24h586l26 24c35 33 35 79 0 112l-26 24-276 2c-152 1-286-1-297-4z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
    </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Presupuesto</h1>
                                <p className="p service__text p__color">
                                    Cotizamos todos los materiales y servicios para llevar acabo las obras.
                                </p>
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.35em"
                        height="1.35em"
                        version="1"
                        viewBox="0 0 512 512"
                        >
                        <path
                            d="M2584 5101c-109-18-134-59-134-219v-109l-57-22-56-22-87 86c-86 84-88 85-137 85-61 0-94-22-201-133-130-135-131-177-7-306l82-86-21-52-21-53h-105c-157-1-206-28-219-125l-6-40-560-5c-308-3-562-7-565-8-24-12-466-465-476-489-12-27-14-217-14-1148 0-1075 1-1117 19-1153 23-46 46-67 94-87 31-13 116-15 602-15h565v-54c0-47 4-57 26-75 62-49 124 0 124 95v34h101c96 0 101-1 107-22 3-13 24-59 46-103 57-114 170-226 286-282 198-97 398-96 598 2 288 143 430 486 327 792-74 221-259 389-480 438l-75 17v187c0 169-2 190-18 204-27 24-85 22-108-4-17-19-19-41-22-204l-3-184-55-11c-126-26-225-80-327-179-118-113-183-251-195-411l-7-85H155l-3 1095-2 1095 202 202 203 203h1054l6-37c9-60 37-106 75-125 27-14 60-18 145-18h110l20-53 21-52-77-81c-131-139-128-183 22-333 108-109 157-133 219-108l39 15 3-228c3-208 5-230 22-249 13-14 31-21 57-21 68 0 69 4 69 342 0 174 4 298 9 298s30-9 55-20l46-19v-108c0-125 14-165 70-198 31-18 52-20 180-20 127 0 149 2 179 20 57 34 71 73 71 200v110l53 20 52 21 86-82c130-123 179-121 313 12 104 104 126 137 126 197 0 49-1 51-85 136l-85 87 23 57 22 57h108c159 0 205 27 217 129l5 46 63 5c72 6 92 22 92 76 0 47-38 74-105 74h-52l-6 46c-10 91-68 124-220 124h-104l-21 53-20 52 73 75c86 88 95 104 95 163 0 51-33 100-131 193-88 83-107 94-158 94-55 0-73-11-166-100l-70-68-52 20-53 21v106c0 129-18 178-73 204-41 20-214 30-293 18zm185-147l31-6v-113c0-145 11-165 125-214 148-63 187-56 300 58 33 34 64 61 71 61 6 0 39-29 74-66l63-65-88-89-87-89 4-53c7-78 65-207 107-235 30-21 46-23 146-23 130 0 125 4 125-107 0-96 3-93-117-93-113 0-160-14-185-53-30-47-78-179-78-212 0-50 12-69 96-155l74-75-70-70-70-70-83 83c-106 105-127 111-249 61-100-40-125-55-141-83-7-12-14-75-17-141l-5-120-97-3-98-3v113c0 157-8 170-131 225-61 27-110 42-138 42-42 1-47-3-133-86l-88-87-70 69-70 69 69 71c37 38 76 81 85 95 24 36 20 89-15 171-63 152-62 152-224 159l-120 5v190l122 5c102 4 126 8 149 26 37 27 103 183 104 243 0 42-4 48-87 133l-87 88 69 70 69 70 81-80c45-43 93-82 108-85 43-11 96 0 182 36 114 49 125 68 125 215 0 99 2 113 18 117 27 7 116 8 151 1zm-374-3078c237-63 399-287 381-526-23-318-318-537-624-465-235 56-392 253-392 494 0 228 134 415 350 488 76 26 206 31 285 9z"
                            transform="matrix(.1 0 0 -.1 0 512)"
                        ></path>
                        <path
                            d="M2595 4538c-140-26-299-147-364-276-146-289-8-636 295-743 245-87 529 30 644 265 69 140 77 299 21 429-32 74-106 86-140 25-13-23-13-33 5-89 59-195-19-385-194-471-61-30-74-33-162-33-82 0-103 4-152 27-177 83-265 274-209 454 61 199 255 309 454 259 81-20 112-15 132 24 22 43 4 85-44 104-84 34-190 43-286 25z"
                            transform="matrix(.1 0 0 -.1 0 512)"
                        ></path>
                        <path
                            d="M2616 4235c-85-30-145-119-146-216-1-203 241-306 389-166 95 90 96 233 3 326-69 68-156 88-246 56zm139-160c50-49 17-135-53-135-48 0-82 32-82 77 0 44 37 83 80 83 19 0 40-9 55-25zM2364 1459l-134-133-93 91c-52 52-105 95-121 99-41 10-80-22-84-70-3-35 3-43 118-160 133-136 163-155 208-137 43 18 339 320 348 354 10 42-22 81-70 85-37 3-43-2-172-129zM4075 4038c-46-25-57-67-31-116 8-15 17-43 21-63 3-20 14-44 25-54 26-23 74-23 100 0 50 45 6 211-63 234-16 6-30 11-31 11s-10-6-21-12zM4084 3659c-16-17-19-37-19-110 0-78 3-91 22-110 27-27 75-29 103-4 17 16 20 31 20 112 0 80-3 96-20 113-27 27-81 26-106-1zM606 3379c-33-26-36-79-6-109 20-20 33-20 566-20 365 0 552 4 565 11 48 25 44 105-7 128-18 8-183 11-558 11-524 0-534 0-560-21zM4084 3289c-16-17-19-37-19-110 0-78 3-91 22-110 27-27 75-29 103-4 17 16 20 31 20 112 0 80-3 96-20 113-27 27-81 26-106-1zM600 3010c-25-25-26-71-1-101l19-24h1104l24 28c29 34 30 56 3 91l-20 26h-555c-541 0-554 0-574-20zM4084 2919c-16-18-19-37-19-120v-99h-408c-448 0-451 0-482-60-23-45-22-630 1-670 36-60 33-60 478-60h406v-150h-395c-438 0-448-1-485-62-19-31-20-50-20-338 0-334 1-338 59-377 34-23 34-23 437-23h404V810h-404c-403 0-403 0-437-23-51-34-59-59-59-183V494l-30-22c-25-19-30-30-30-63 0-34 4-42 30-57l30-17V220c0-98 3-120 20-148 40-64 1-62 960-62s920-2 960 62c19 31 20 50 20 336 0 335-2 345-63 382-30 19-53 20-439 20h-408v150h113c100 0 116 2 135 20 14 14 22 33 22 55s-8 41-22 55c-21 20-32 20-585 20h-563v500h1660v-500h-118c-105 0-121-2-140-20-30-28-30-82 0-110 20-18 35-20 167-20 127 0 150 3 178 20 61 37 63 47 63 383 0 300 0 304-23 338-13 19-38 39-57 46-25 8-152 12-433 12l-398 1 3 73 3 72 417 5 418 5 32 33 33 32 3 310c2 273 1 314-14 346-31 64-28 64-484 64h-410v100c0 87-3 103-20 120-27 27-81 26-106-1zm886-614v-245H3310v490h1660v-245zm0-1895V160H3310v500h1660V410z"
                            transform="matrix(.1 0 0 -.1 0 512)"
                        ></path>
                        <path
                            d="M3547 2368c-42-33-37-106 9-127 18-8 188-11 588-11 555 0 564 0 590 21 34 27 36 79 4 109-21 20-32 20-598 20-445 0-580-3-593-12zM3565 481c-49-20-64-83-30-121 18-20 30-20 602-20 570 0 583 0 603 20 27 27 26 81-1 106-20 18-46 19-588 21-311 1-575-2-586-6zM600 2650c-30-30-27-83 6-109 26-21 36-21 560-21 375 0 540 3 558 11 51 23 55 103 7 128-13 7-200 11-565 11-533 0-546 0-566-20zM606 2289c-33-26-36-79-6-109 20-20 33-20 566-20 365 0 552 4 565 11 48 25 44 105-7 128-18 8-183 11-558 11-524 0-534 0-560-21zM600 1920c-25-25-26-71-1-101l19-24h534l19 24c25 30 24 76-1 101-19 19-33 20-285 20s-266-1-285-20zM3539 1412c-30-25-30-75 0-105l22-22h578c555 0 580 1 600 19 27 25 28 79 1 106-20 20-33 20-599 20-548 0-580-1-602-18zM1300 930c-17-17-20-33-20-114 0-90 1-96 26-115 31-24 43-26 78-10 31 14 46 55 46 124 0 63-16 112-40 125-30 16-68 12-90-10zM1310 560c-39-39-20-111 45-168 62-55 127-54 153 1 18 37 2 77-38 101-17 9-37 30-45 45-23 46-80 56-115 21zM1670 483c-34-13-50-37-50-74 0-56 25-69 130-69s130 13 130 69c0 59-26 75-119 78-42 1-83 0-91-4zM2040 483c-34-13-50-37-50-74 0-56 25-69 130-69s130 13 130 69c0 59-26 75-119 78-42 1-83 0-91-4zM2410 483c-34-13-50-37-50-74 0-56 25-69 130-69s130 13 130 69c0 59-26 75-119 78-42 1-83 0-91-4zM2780 483c-34-13-50-37-50-74 0-56 25-69 130-69s130 13 130 69c0 59-26 75-119 78-42 1-83 0-91-4z"
                            transform="matrix(.1 0 0 -.1 0 512)"
                        ></path>
                        </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Ejecución</h1>
                                <p className="p service__text p__color">
                                    Inicializamos las obras, incluyendo redes eléctricas, mobiliario y tecnología.
                                </p>
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.35em"
                        height="1.35em"
                        version="1"
                        viewBox="0 0 512 512"
                        >
                        <path
                            d="M1578 5104c-16-8-29-16-30-17-2-1-5-339-8-752l-5-750-255-6c-243-5-259-7-333-32-154-53-211-91-372-247-66-64-142-128-170-144-88-49-188-77-301-83l-104-6v-170l113 6c245 14 394 85 589 280 110 111 184 162 288 198 60 21 85 24 305 27l240 3 543-145c299-80 558-153 575-164 132-77 74-292-80-292-24 0-259 58-531 130-268 71-499 130-513 130-38 0-63-30-125-153-75-145-163-238-278-293-102-49-176-63-323-64H680v-172l158 5c182 5 238 18 368 82 109 53 222 153 286 253l43 65 3-789c1-434 0-795-3-803-5-12-33-13-163-8-308 12-401 61-640 334-38 44-94 93-145 126-148 98-283 137-473 137H0v-167l138-6c103-3 151-10 195-25 112-41 179-84 257-166 222-233 251-259 350-309 137-68 220-87 428-94l172-6V539c0-262 3-485 6-494 18-47-53-45 1789-45h1727l29 29 29 29v5004l-29 29-29 29H3333c-1512-1-1731-3-1755-16zm3372-2544V170H1710v1341c0 1273 1 1341 18 1337 9-3 190-51 402-108 362-96 389-102 460-98 90 6 151 32 210 91 145 144 127 385-37 501-59 42-54 40-568 177-247 66-458 122-467 125-17 5-18 48-18 710v704h3240V2560z"
                            transform="matrix(.1 0 0 -.1 0 512)"
                        ></path>
                        <path
                            d="M2472 4608l3-83 853-3 852-2v170H2469l3-82zM2137 4093c-4-3-7-42-7-85v-78h2390v170H3332c-654 0-1192-3-1195-7zM2477 3663c-4-3-7-42-7-85v-78h520v170h-253c-140 0-257-3-260-7zM3160 3585v-85h940v170h-940v-85zM4270 3585v-85h250v170h-250v-85zM2990 3155v-85h850v170h-850v-85zM4010 3155v-85h510v170h-510v-85zM2990 2735v-85h1530v170H2990v-85zM2130 2305v-85h2390v170H2130v-85zM2130 1875v-85h1710v170H2130v-85zM4010 1875v-85h510v170h-510v-85zM2137 1533c-4-3-7-42-7-85v-78h2390v170H3332c-654 0-1192-3-1195-7zM2130 1025v-85h521l-3 83-3 82-257 3-258 2v-85zM2820 1025v-85h1700v170H2820v-85z"
                            transform="matrix(.1 0 0 -.1 0 512)"
                        ></path>
                        </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Entrega</h1>
                                <p className="p service__text p__color">
                                   Entrega de los  projectos culminados, y listos para su ocupación o equipamiento.
                                </p>
                            </div>
                         </div>
                    </div>

                    <div className="col__3" id="maintenance">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.35em"
                        height="1.35em"
                        version="1"
                        viewBox="0 0 512 512"
                        >
                        <path
                            d="M665 4935c-16-16-25-35-25-57 0-29 28-60 280-313l280-280v-170l-98-98-97-97H835l-280 280c-253 252-284 280-313 280-22 0-41-9-57-25l-25-24v-706l223-222 222-223h640l315-316c173-173 328-322 344-330 23-13 33-13 57-3 41 17 64 62 49 98-6 15-165 181-353 369l-343 342H675l-178 178-177 177v409l223-222 223-222h308l143 143 143 143v308l-222 223-222 223h409l177-177 178-178v-639l342-343c188-188 354-347 369-353 36-15 81 8 98 49 10 24 10 34-3 57-8 16-157 171-330 344l-316 315v640l-223 222-222 223H689l-24-25z"
                            transform="matrix(.1 0 0 -.1 0 512)"
                        ></path>
                        <path
                            d="M4198 4750c-250-126-421-217-428-229-6-11-10-85-10-173v-153l-960-960-959-959-65 62c-98 94-99 94-273-81-127-128-143-148-143-177 0-31 27-61 302-337l303-303-520-521C957 431 920 397 851 362c-71-35-80-37-170-37-83 0-104 4-153 27-73 34-142 103-176 176-23 49-27 70-27 152 0 83 4 103 30 160 26 60 64 101 462 501 475 477 462 461 404 520-59 59-45 69-499-384-441-439-494-502-533-625-63-201-18-394 126-537 143-144 336-189 537-126 130 41 172 79 881 788 769 770 709 691 605 799l-62 65 959 959 960 960h153c88 0 162 4 173 10 25 14 439 840 439 877 0 22-29 56-143 170-121 121-147 143-172 142-18 0-197-84-447-209zm506-49l78-78-176-352-176-351h-305l-982-982-983-983-102 103-103 102 983 983 982 982v305l348 174c191 96 349 175 352 175 3 1 41-34 84-78zM1945 1940l260-260-63-62-62-63-262 262-263 263 60 60c33 33 62 60 65 60s122-117 265-260z"
                            transform="matrix(.1 0 0 -.1 0 512)"
                        ></path>
                        <path
                            d="M3130 2470c-13-13-20-33-20-57 0-36 15-53 348-385l347-348h640l177-177 178-178V916l-223 222-223 222h-308l-143-143-143-143V766l222-223 222-223h-409l-177 177-178 178v639l-342 343c-188 188-354 347-369 353-36 15-81-8-98-49-10-24-10-34 3-57 8-16 157-171 330-344l316-315V605l223-222 222-223h706l24 25c16 16 25 35 25 57 0 29-28 60-280 313l-280 280v170l98 98 97 97h170l280-280c253-252 284-280 313-280 22 0 41 9 57 25l25 24v706l-223 222-222 223h-640l-325 325c-311 310-327 325-363 325-24 0-44-7-57-20z"
                            transform="matrix(.1 0 0 -.1 0 512)"
                        ></path>
                        </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Seguimiento y Mantenimiento</h1>
                                <p className="p service__text p__color">
                                   Mantenimiento de equipos instalados, por tiempo determinado, y acompañamiento permanente con asesorías, consultas y consejos.
                                </p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
            <div className='services-image-container' style={{width: '50%', display: 'flex', alignItems: 'center'}}>
                <img src={AboutImage} style={{maxWidth: '100%', height: '100%'}}/>
            </div>
        </div>
  );
}

export default Services;

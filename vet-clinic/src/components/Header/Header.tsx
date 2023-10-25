import "./Header.css"

function Header() {
    return (
      <div className="header">
        <div className="logoBox">
        <svg fill="#000000" height="40px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <g>
            <g>
              <g>
                <path d="M69.662,259.504H158.3h88.638c9.864,0,17.86-7.997,17.86-17.86v-88.638c0-34.473-16.847-66.785-44.581-86.646
                  C217.425,34.643,190.73,9.682,158.3,9.682S99.176,34.643,96.382,66.36C68.648,86.22,51.8,118.533,51.8,153.006v88.638
                  C51.801,251.508,59.798,259.504,69.662,259.504z M158.3,45.402c14.586,0,26.453,11.867,26.453,26.454
                  c0,14.636-11.689,26.453-26.453,26.453c-14.715,0-26.453-11.784-26.453-26.453C131.847,57.27,143.714,45.402,158.3,45.402z
                  M105.892,105.468c23.983,37.532,80.186,38.482,104.815,0c11.631,12.855,18.371,29.765,18.371,47.537
                  c0,39.028-31.75,70.777-70.777,70.777c-39.027,0-70.777-31.751-70.777-70.777C87.522,135.233,94.262,118.323,105.892,105.468z"/>
                <path d="M386.756,369.14c-36.718,0-66.589,29.871-66.589,66.589c0,36.718,29.871,66.589,66.589,66.589s66.59-29.872,66.59-66.589
                  C453.346,399.012,423.474,369.14,386.756,369.14z M386.756,466.597c-17.02,0-30.868-13.847-30.868-30.868
                  c0-17.021,13.848-30.868,30.868-30.868c17.021,0,30.869,13.847,30.869,30.868C417.625,452.75,403.777,466.597,386.756,466.597z"
                  />
                <path d="M386.756,360.335c23.234,0,42.136-18.902,42.136-42.136s-18.902-42.136-42.136-42.136s-42.136,18.902-42.136,42.136
                  S363.524,360.335,386.756,360.335z M386.756,311.784c3.538,0,6.415,2.878,6.415,6.415c0,3.538-2.878,6.416-6.415,6.416
                  s-6.415-2.878-6.415-6.416C380.341,314.662,383.22,311.784,386.756,311.784z"/>
                <path d="M333.445,322.828c-16.301-16.302-42.612-16.488-59.138-0.43c-31.358-33.79-73.48-50.714-116.007-50.714
                  C71.197,271.683,0,342.541,0,429.984v54.474c0,9.864,7.997,17.86,17.86,17.86h280.878c9.864,0,17.86-7.997,17.86-17.86v-54.474
                  c0-12.432-1.445-24.531-4.167-36.145C345.126,386.941,356.976,346.358,333.445,322.828z M140.439,466.597H35.721v-36.614
                  c0-35.346,15.043-67.24,39.057-89.631l65.661,65.661V466.597z M104.703,319.759c33.025-16.124,72.735-16.825,107.194,0
                  L158.3,373.356L104.703,319.759z M280.88,466.597h-0.001H176.16v-60.584l65.661-65.661
                  c24.762,23.089,39.058,55.278,39.058,89.631V466.597z M303.651,359.038c-3.696,0-6.415-3.037-6.415-6.415
                  c0-3.548,2.87-6.415,6.415-6.415c3.548,0,6.417,2.868,6.417,6.415C310.067,356.171,307.199,359.038,303.651,359.038z"/>
                <path d="M469.864,310.486c-23.286,0-42.138,18.844-42.138,42.136c0,23.286,18.845,42.136,42.138,42.136
                  c23.285,0,42.136-18.845,42.136-42.136C512,329.336,493.155,310.486,469.864,310.486z M469.864,359.038
                  c-3.548,0-6.417-2.868-6.417-6.415c0-3.548,2.868-6.415,6.417-6.415s6.415,2.871,6.415,6.415
                  C476.279,356.171,473.409,359.038,469.864,359.038z"/>
              </g>
            </g>
          </g>
        </svg>
        <p className="logoText">VetPet</p>
        </div>
        <div className="contacts">
          <span className="contacts-phone">
            <svg  fill="#000000" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
            </svg>
            333-555-666-999
          </span>
          <span className="contacts-addres">
            <svg height="20" viewBox="0 0 48 48" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/><path d="M0 0h48v48H0z" fill="none"/></svg>
            SomePlace st. 20/45.
          </span>
        </div>
        <div className="navBar">
          <a>about us</a>
          <a>services</a>
          <a>arice list</a>
          <a>contacs</a>
        </div>
      </div>
    );
  }

export default Header;
import React from 'react'
import '../../Style/KeralaTourisnBanner.css'

function KeralaTourismBanner() {
  const activity = [{ actv: 'Day Trip', img: 'https://e1.pngegg.com/pngimages/204/846/png-clipart-emoji-sticker-sun-icon-thumbnail.png' },{
    actv:'Multi-day Trip', img:'https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2022/01/808-u1f310-meridianglobe-emoji-coloring-page.png'
  },
{actv:'Private tours',img:'https://hotemoji.com/images/dl/i/bust-in-silhouette-emoji-by-twitter.png'},
{actv:'Water Activity',img:'https://images.emojiterra.com/google/android-12l/512px/1f6e5.png'},
{actv:'Guided tours',img:'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/busts-in-silhouette.png'},
{actv:'Food and drinks',img:'https://w7.pngwing.com/pngs/953/26/png-transparent-emoji-noto-fonts-cocktail-emoticon-information-bar-food-orange-cocktail.png'}]
  return (


    <div>
      <div className="parent">
        <div className="search-box">
          <div className='serchparent'>
            <b>Kerala</b>
            <div className='search'><b>Search</b></div></div>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Add dates" style={{ width: '50%' }}></input>

        </div>
        <div className="text-container">
          <div className="top-text">Things To Do In</div>
          <div className="bottom-text">Kerala</div>
        </div>
      </div>
      <div className='w-100 mt-5' style={{ display: 'flex',  justifyContent: 'space-around',padding:'0px 40px' }}>
        {activity.map((item)=>{
          return(
            <div className='activity'>
              <img src={item.img} style={{width:'15%',marginRight:'20px'}}></img>
              <a>{item.actv}</a>
            </div>

          )
        })}

      </div>
    </div>

  )
}

export default KeralaTourismBanner


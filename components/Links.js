import Link from "next/link"
import React from "react"
export default function Links() {
    return (
        <div className="Link_container">
            <a href="https://www.instagram.com">
            <div className="link">
                <img className="inta_logo" src="/images/posts/instagram_logo.png" alt="instagram__logo" />
            </div>
            </a>
            <a href="https://www.facebook.com">
            <div className="link">
                <img  src="/images/posts/facebook_logo.png" alt="instagram__logo" />
            </div>
            </a>
            <a href="https://www.twitter.com">
            <div className="link">
                <img src="/images/posts/twitter.png" alt="instagram__logo" />
            </div>
            </a>
        </div>
    )
}

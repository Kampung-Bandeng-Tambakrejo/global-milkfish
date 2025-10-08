"use client";

import React from 'react';

export default function WelcomeScreen({onEnter, animationClass}) {
    return (
        <div className= {`fixed inset-0  ${animationClass}`}>
            <h1>Home</h1>
        </div>
    );
}
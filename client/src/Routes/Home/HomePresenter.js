import React from 'react';

export default ({ me }) => (
    <div>
        {
            me ? 
                <p>{me.id}님 환영합니다.</p> 
                : 
                <p>춤추는 개발자의 블로그입니다.</p>
        }
    </div>
);
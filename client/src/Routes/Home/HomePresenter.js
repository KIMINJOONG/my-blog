import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SLink = styled(Link)``;

export default ({ me }) => (
    <div>
        {
            me ?( 
                <div>
                    <p>{me.id}님 환영합니다.</p>
                    <SLink to="/admin/logout">로그아웃</SLink>
                </div>)
                : 
                <p>춤추는 개발자의 블로그입니다.</p>
        }
    </div>
);
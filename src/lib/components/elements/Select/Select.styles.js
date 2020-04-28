import styled from "styled-components";

export const SelectBox = styled.div`
margin-top: 100px;
padding: 32px;

.select-box {
  display: flex;
  width: 250px;
  flex-direction: column;
  direction: rtl;

    .select-box--main{
        display: grid;
        height: 42px;
        grid-template-columns: 90% 10%;
        background: ${(props) => props.theme.colors.main};
        border-radius: 8px;
        margin-bottom: 8px;
        color: #f5f6fa;
        position: relative; 
        min-height: 18px;
        cursor: pointer;

        .select-box--icon {
            justify-self: center;
            align-self: center;
            transition: all 400ms ease-in-out;
            cursor: pointer;
            
            &[data-active="true"]{
                transform: rotateX(180deg)
            }
        }

        &[data-isdisabled="true"]{
            background-color: ${(props) => props.theme.colors.mainDisabled} !important;
            transform: none ;
            cursor: default;
            
            .select-box--icon {
                &[data-active="true"]{
                    transform: none;
                }   
            }

            *{
                cursor: default;
            }
        }
    }

    .options-container {
        background:  ${(props) => props.theme.colors.main};
        color: #f5f6fa;
        max-height: 0;
        width: 100%;
        opacity: 0;
        transition: all 0.4s;
        border-radius: 8px;
        overflow: hidden;
        order: 1;
    
        &{
            &[data-active="true"] {
                max-height: 240px;
                opacity: 1;
                overflow-y: scroll;
            }

            &[data-active="true"] + .selected::after {
                transform: rotateX(180deg);
                top: -6px;
            }

            &::-webkit-scrollbar {
                width: 8px;
                background: #0d141f;
                border-radius: 0 8px 8px 0;
                direction: rtl !important;
            }

            &::-webkit-scrollbar-thumb {
                background: #525861;
                border-radius: 0 8px 8px 0;
            }
        }

        .option--check-sign{
            &[data-ischecked="false"]{
                visibility: hidden;
            }
        }
    }

    .options-container--option, .selected {
        padding: 12px 12px;
        cursor: pointer;
    };

    .options-container--option:hover {
        background: #414b57;
    };

    label {
        cursor: pointer;
    };

    .options-container--option 
    {
        display: grid;
        grid-template-columns: 12% 88%;
    }

    .options-container--search {
        outline: none;
        border-radius: 5px;
        height: 24px;
        margin: 11px;
    }
}
`;
import styled from 'styled-components'
import * as hx from '../helpers'

const Guide = styled.div`
  --reactour-accent: ${props => props.accentColor};
  position: fixed;
  background-color: #fff;
  transition: transform 0.3s;
  padding: 24px 30px;
  box-shadow: 0 0.5em 3em rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  color: inherit;
  z-index: 1000000;
  max-width: 331px;
  min-width: 150px;
  padding-right: 40px;
  border-radius: ${props => props.rounded}px;

  transform: ${props => {
    const {
      targetTop,
      targetRight,
      targetBottom,
      targetLeft,
      targetWidth,
      targetHeight,
      windowWidth,
      windowHeight,
      helperWidth,
      helperHeight,
      helperPosition,
      padding,
      showArrow,
      arrowSize = 25
    } = props

    const available = {
      left: targetLeft,
      right: windowWidth - targetRight,
      top: targetTop,
      bottom: windowHeight - targetBottom,
    }

    const couldPositionAt = position => {
      return (
        available[position] >
        (hx.isHoriz(position)
          ? helperWidth + padding * 2
          : helperHeight + padding * 2)
      )
    }

    const autoPosition = coords => {
      const positionsOrder = hx.bestPositionOf(available)
      for (let j = 0; j < positionsOrder.length; j++) {
        if (couldPositionAt(positionsOrder[j])) {
          return showArrow ? [...coords[positionsOrder[j]], positionsOrder[j]] : coords[positionsOrder[j]]
        }
      }
      return coords.center
    }

    const pos = helperPosition => {
      const hX = hx.isOutsideX(targetLeft + helperWidth, windowWidth)
        ? hx.isOutsideX(targetRight + padding, windowWidth)
          ? targetRight - helperWidth
          : targetRight - helperWidth + padding
        : targetLeft - padding
      const x = hX > padding ? hX : padding
      const hY = hx.isOutsideY(targetTop + helperHeight, windowHeight)
        ? hx.isOutsideY(targetBottom + padding, windowHeight)
          ? targetBottom - helperHeight
          : targetBottom - helperHeight + padding
        : targetTop - padding
      const y = hY > padding ? hY : padding
      const coords = {
        top: [x, targetTop - helperHeight - padding * 2],
        right: [targetRight + padding * 2, y],
        bottom: [x, targetBottom + padding * 2],
        left: [targetLeft - helperWidth - padding * 2, y],
        center: [
          windowWidth / 2 - helperWidth / 2,
          windowHeight / 2 - helperHeight / 2,
        ],
      }

      if (showArrow) {
        coords.top[1] -= arrowSize
        coords.right[0] += arrowSize
        coords.bottom[1] += arrowSize
        coords.left[0] -= arrowSize
      }

      if (helperPosition === 'center' || couldPositionAt(helperPosition)) {
        return coords[helperPosition]
      }
      return autoPosition(coords)
    }

    const arrow = position => {
      if (position.length !== 3) {
        return '';
      }

      const arrowPos = position[2]
      const offset = arrowPos === 'top' || arrowPos === 'bottom' ?
        `left: ${(targetWidth < helperWidth - padding ? targetWidth : helperWidth - padding) / 2
          - arrowSize + (position[0] < targetLeft ? targetLeft - position[0] : 0)}px`
        : `top: ${(targetHeight < helperHeight - padding ? targetHeight : helperHeight - padding) / 2
          - arrowSize + (position[1] < targetTop ? targetTop - position[1] : 0)}px`
      const arrowColor = props.style.backgroundColor || '#fff'
      return `
        &::before
        {
        content: "";
        position: absolute;
        ${arrowPos}: 99%;
        ${offset};
        border-style: solid;
        border-width: ${arrowSize}px;
        border-color: ${arrowPos === 'top' ? arrowColor : 'transparent'}
          ${arrowPos === 'right' ? arrowColor : 'transparent'}
          ${arrowPos === 'bottom' ? arrowColor : 'transparent'}
          ${arrowPos === 'left' ? arrowColor : 'transparent'};
        display: block;
        width: 0;
        };
      `
    }

    const p = pos(helperPosition)

    return `translate(${p[0]}px, ${p[1]}px);
    ${showArrow && arrow(p)}`
  }}
`

export default Guide

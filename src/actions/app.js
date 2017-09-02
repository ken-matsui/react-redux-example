export default {
  increment: (x_) => {
  	switch(x_) {
    	case 'PLUS': {
    		return { type: 'INCREMENT' }
    	}
    	case 'MINUS': {
    		return { type: 'DECREMENT' }
    	}
    	default: {
    		return { type: 'UNKNOWN' }
    	}
    }
  }
}
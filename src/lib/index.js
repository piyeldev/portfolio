// intersection observer
let executeOnIntersectCallback = null;
let executeOnExitCallback = null;
export function setExecuteOnIntersectCallback(callback) {
	executeOnIntersectCallback = callback;
}

export function setExecuteOnExitCallback(callback) {
	executeOnExitCallback = callback;
}

let observer;

if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
	// IntersectionObserver logic
	observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				// Execute the callback if it's set
				if (executeOnIntersectCallback) {
					executeOnIntersectCallback();
				}
			} else {
				if (executeOnExitCallback) {
					executeOnExitCallback();
				}
			}
		});
	});
}

// Function to observe an element
export function observeElement(element) {
	if (observer) {
		observer.observe(element);
	} else {
		console.warn('IntersectionObserver is not available.');
	}
}
export function unobserveElement(element) {
	if (observer) {
		observer.unobserve(element);
	} else {
		console.warn('IntersectionObserver is not available.');
	}
}

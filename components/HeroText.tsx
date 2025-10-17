'use client';

import { Sparkles } from 'lucide-react';

export default function HeroText() {
	return (
		<div className="relative">
			<div className="mb-6">
				<div className="inline-flex items-center space-x-2 px-4 py-2 border border-[var(--foreground)]/20 rounded-full bg-transparent backdrop-blur-sm">
					<Sparkles className="w-4 h-4 text-[var(--accent)]" />
					<span className="font-mono text-xs tracking-wider text-[var(--foreground)]">
						JiwonAI
					</span>
				</div>
			</div>

			<h1 className="font-serif text-3xl md:text-4xl lg:text-7xl font-black text-[var(--headings)] dark:text-[var(--headings-serif)] mb-8 leading-none tracking-tight">
				{/* Building
				<br />
				<span className="italic">Automations</span>
				<br />
				with Character
				<span className="text-[var(--accent)] dark:text-[var(--highlight-dot)]">
					.
				</span> */}
				<span className="italic text-[var(--accent)] dark:text-[var(--highlight-dot)]">Automate</span> your business.
				<br />
				<span className="italic text-[var(--accent)] dark:text-[var(--highlight-dot)]">Save </span> hours every week.
			</h1>
			<p className="font-mono text-lg md:text-xl text-[var(--body-text)] dark:text-[var(--foreground)] max-w-2xl mx-auto mb-12 leading-relaxed">
				{/* AI systems crafted with precision and personality. */}
				We help small and local businesses cut operating costs with smart AI automation — from chatbots that handle inquiries to workflows that run your back office on autopilot.
			</p>
		</div>
	);
}
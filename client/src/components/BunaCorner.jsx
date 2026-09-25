import React, { useState, useEffect } from 'react';
import { Coffee, Sparkles, Send, Heart, Flame, MessageSquare, CheckCircle2 } from 'lucide-react';
import { ethiopianRoasts } from '../data/portfolioData';
import CoffeePourVisual from './CoffeePourVisual';

export default function BunaCorner() {
  const [selectedRoast, setSelectedRoast] = useState(ethiopianRoasts[0]);
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');
  const [cups, setCups] = useState(1);
  const [notes, setNotes] = useState([]);
  const [totalBrewed, setTotalBrewed] = useState(42);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  // Fetch live coffee notes from backend
  useEffect(() => {
    fetch('/api/coffee-notes')
      .then((res) => res.json())
      .then((data) => {
        if (data.notes) setNotes(data.notes);
        if (data.totalBrewed) setTotalBrewed(data.totalBrewed);
      })
      .catch((err) => console.log('Notes loaded locally'));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const res = await fetch('/api/coffee-notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          senderName: senderName || 'A Kind Visitor',
          message,
          originRoast: selectedRoast.name,
          cupsBrewed: cups,
        }),
      });

      const result = await res.json();
      if (res.ok) {
        setStatusMessage({ type: 'success', text: `☕ Brewed ${cups} cup(s) of ${selectedRoast.name}! Note posted.` });
        setMessage('');
        setSenderName('');
        setCups(1);
        if (result.note) setNotes([result.note, ...notes]);
        if (result.totalBrewed) setTotalBrewed(result.totalBrewed);
      } else {
        setStatusMessage({ type: 'error', text: result.error || 'Failed to brew note.' });
      }
    } catch (err) {
      // Optimistic fallback if backend is offline
      const mockNote = {
        _id: 'client_' + Date.now(),
        senderName: senderName || 'A Kind Visitor',
        message,
        originRoast: selectedRoast.name,
        cupsBrewed: cups,
        createdAt: new Date().toISOString(),
      };
      setNotes([mockNote, ...notes]);
      setTotalBrewed(totalBrewed + cups);
      setStatusMessage({ type: 'success', text: `☕ Virtual ${selectedRoast.name} brewed! Note added to board.` });
      setMessage('');
      setSenderName('');
      setCups(1);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="buna-corner" className="py-24 bg-[#F7F2EA] border-b border-[#E2D3C0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#D2BBA0] text-xs font-semibold text-[#7F5E42] tracking-wider uppercase">
            <Coffee className="w-3.5 h-3.5 text-[#C88346]" />
            Buna Corner • ቡና
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2E1E14] tracking-tight">
            Ethiopian Coffee Ritual &amp; Visitor Board
          </h2>
          <p className="text-base sm:text-lg text-[#61442E]">
            Ethiopia is the birthplace of coffee (called <strong className="text-[#2E1E14]">Buna</strong>). In Ethiopian culture, brewing coffee is about hospitality, conversation, and community. Brew Ruth a virtual roast and leave a warm greeting!
          </p>

          {/* Global Brewed Cup Counter */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E1E14] text-[#FAF6F0] text-xs font-mono shadow-warm">
              <span className="w-2 h-2 rounded-full bg-[#C88346] animate-ping"></span>
              <span>Total virtual cups brewed by visitors: </span>
              <strong className="text-[#E09A55] text-sm">{totalBrewed} ☕</strong>
            </div>
          </div>
        </div>

        {/* Two-Column Interactive Brewing Station */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* Left Column: Interactive Brewing Form & Roast Selector */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* ☕ Interactive Ethiopian Jebena Pouring Liquid Coffee */}
            <CoffeePourVisual
              selectedRoast={selectedRoast}
              onSelectRoast={setSelectedRoast}
              roasts={ethiopianRoasts}
            />

            <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF6F0] border border-[#E2D3C0] shadow-warm space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#E2D3C0]">
                <h3 className="font-serif font-bold text-lg text-[#2E1E14] flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#C88346]" />
                  1. Pick an Ethiopian Roast
                </h3>
                <span className="text-xs font-mono text-[#7F5E42]">Origin: Ethiopia</span>
              </div>

              {/* Roast Cards */}
              <div className="grid grid-cols-2 gap-2.5">
                {ethiopianRoasts.map((roast) => {
                  const isSelected = selectedRoast.name === roast.name;
                  return (
                    <button
                      key={roast.name}
                      type="button"
                      onClick={() => setSelectedRoast(roast)}
                      className={`p-3 rounded-2xl border text-left transition-all duration-200 ${
                        isSelected
                          ? 'bg-[#2E1E14] text-[#FAF6F0] border-[#2E1E14] shadow-warm'
                          : 'bg-[#F7F2EA] border-[#E2D3C0] text-[#463020] hover:bg-[#EFE6DA]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-serif font-bold text-sm">{roast.name}</span>
                        <Coffee className={`w-3.5 h-3.5 ${isSelected ? 'text-[#C88346]' : 'text-[#7F5E42]'}`} />
                      </div>
                      <div className={`text-[11px] leading-tight ${isSelected ? 'text-[#D2BBA0]' : 'text-[#7F5E42]'}`}>
                        {roast.notes}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Brewing Note Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="flex items-center justify-between pb-2 border-b border-[#E2D3C0]">
                  <h3 className="font-serif font-bold text-base text-[#2E1E14]">
                    2. Leave a Note on Ruth's Board
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-[#7F5E42]">
                    <span>Cups:</span>
                    {[1, 2, 3].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setCups(num)}
                        className={`w-6 h-6 rounded-md font-mono text-xs font-bold transition-colors ${
                          cups === num ? 'bg-[#2E1E14] text-[#FAF6F0]' : 'bg-[#EFE6DA] text-[#61442E]'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#61442E] mb-1">Your Name / Handle</label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Dawit, Bethlehem, Fellow Dev..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F2EA] border border-[#E2D3C0] text-sm text-[#2E1E14] placeholder-[#BA9B7B] focus:outline-none focus:ring-2 focus:ring-[#C88346]"
                    maxLength={50}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#61442E] mb-1">Friendly Note / Feedback / Greeting</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={3}
                    placeholder="Drop an encouraging word, thoughts on Ruth's projects, or a hackathon shoutout..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F2EA] border border-[#E2D3C0] text-sm text-[#2E1E14] placeholder-[#BA9B7B] focus:outline-none focus:ring-2 focus:ring-[#C88346] resize-none"
                    maxLength={250}
                  />
                </div>

                {statusMessage && (
                  <div
                    className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                      statusMessage.type === 'success'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{statusMessage.text}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !message.trim()}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-xs sm:text-sm bg-[#2E1E14] text-[#FAF6F0] hover:bg-[#463020] transition-colors disabled:opacity-50"
                >
                  <Coffee className="w-4 h-4 text-[#C88346]" />
                  <span>{isSubmitting ? 'Brewing...' : `Brew ${cups} Cup${cups > 1 ? 's' : ''} & Post Note`}</span>
                </button>
              </form>

            </div>
          </div>

          {/* Right Column: Live Coffee Notes Board */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#C88346]" />
                <h3 className="font-serif font-bold text-lg text-[#2E1E14]">
                  Recent Notes on the Board
                </h3>
              </div>
              <span className="text-xs font-mono text-[#7F5E42]">{notes.length} notes posted</span>
            </div>

            <div className="space-y-3 max-h-[560px] overflow-y-auto pr-1">
              {notes.length === 0 ? (
                <div className="p-8 rounded-2xl bg-[#FAF6F0] border border-[#E2D3C0] text-center text-sm text-[#7F5E42]">
                  No notes yet. Be the first to brew a cup! ☕
                </div>
              ) : (
                notes.map((note) => (
                  <div
                    key={note._id || Math.random()}
                    className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#E2D3C0] hover:border-[#BA9B7B] transition-all space-y-2 text-left shadow-sm"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#EFE6DA] flex items-center justify-center text-[10px] font-bold text-[#61442E]">
                          ☕
                        </div>
                        <span className="font-bold text-[#2E1E14]">{note.senderName}</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F7F2EA] text-[#7F5E42] border border-[#E2D3C0]">
                        {note.originRoast} • {note.cupsBrewed || 1} ☕
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#61442E] leading-relaxed">
                      "{note.message}"
                    </p>

                    <div className="text-[10px] text-[#BA9B7B] font-mono pt-1 border-t border-[#E2D3C0]/40 flex justify-between items-center">
                      <span>Ethiopian Buna ritual</span>
                      <span>{note.createdAt ? new Date(note.createdAt).toLocaleDateString() : 'Just now'}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

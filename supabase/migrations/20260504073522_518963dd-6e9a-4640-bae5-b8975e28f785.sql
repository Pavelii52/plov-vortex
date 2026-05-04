
-- Enum для статусов генерации
CREATE TYPE public.video_generation_status AS ENUM (
  'draft',
  'generating_frames',
  'frames_ready',
  'generating_video',
  'completed',
  'failed'
);

-- Enum для типа запроса
CREATE TYPE public.video_generation_kind AS ENUM ('dish', 'service');

-- Основная таблица
CREATE TABLE public.video_generations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  kind public.video_generation_kind NOT NULL,
  subject_title TEXT NOT NULL,
  subject_description TEXT,
  ideas JSONB,
  selected_idea JSONB,
  frame_urls JSONB,
  selected_frame_url TEXT,
  video_url TEXT,
  ending_payload JSONB,
  status public.video_generation_status NOT NULL DEFAULT 'draft',
  error_message TEXT,
  replicate_prediction_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.video_generations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own video generations"
ON public.video_generations FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own video generations"
ON public.video_generations FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own video generations"
ON public.video_generations FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own video generations"
ON public.video_generations FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Функция обновления updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_video_generations_updated_at
BEFORE UPDATE ON public.video_generations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Функция для подсчёта генераций за 24 часа (для лимитов)
CREATE OR REPLACE FUNCTION public.count_user_video_generations_24h(_user_id UUID)
RETURNS INTEGER
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COUNT(*)::INTEGER
  FROM public.video_generations
  WHERE user_id = _user_id
    AND created_at > now() - INTERVAL '24 hours';
$$;

CREATE INDEX idx_video_generations_user_created
ON public.video_generations(user_id, created_at DESC);
